// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot, runReturn, defaultRunReturn } from "./ManagedBot";
import { getBlockTime, hours, getCoinGeckoPriceInUSD, bigint } from "./library";
import { BigNumber, BigNumberish } from "ethers";
import { UniswapV2Pair } from "../typechain/UniswapV2Pair";


/*
 *               START: Is there a valid price from Prices now?
 *                    /                              \
 *                  yes                              no
 *                  /                                 \
 *            Are there liquidations            Are there liquidations
 *             at that price?                 at that the external price of the collateral? (coingecko)
 *               /             \               /              |
 *             yes             no            no               |
 *             /                \           /                 |
 *           Are there          Wait 1 hour                  yes
 *      rewards to be claimed                                 |
 *          for this price?                                   |
 *         /               \                                  |
 *       yes               no -----------------------> Can a new price be completed now?
 *       /                                                  /            \
 *     liquidate, then return to START                    no            yes
 *                                                        /              \
 *                                                  return to START      Complete a price, return to START
 *                                                 after time to next
 *                                           possible price pull has elapsed
 */
export class LiquidationDiscoverBot extends ManagedBot {
  name = "🤑 Discover Liquidate";

  async runImpl(): Promise<runReturn> {
    let wethPair = this.protocol!.pairs.coinweth;
    let btcPair = this.protocol!.pairs.coinbtc;

    let [ethPrice, btcPrice] = await getCoinGeckoPriceInUSD(['eth', 'btc']);

    let protocolFmt = (price: number): BigInt => BigInt(Math.floor(price)) * BigInt(1e18);

    let runReturn1 = await this.genRunForCollateralType(0, wethPair, protocolFmt(ethPrice));
    let runReturn2 = await this.genRunForCollateralType(1, btcPair, protocolFmt(btcPrice));
    return {
      sleepSeconds: Math.min(runReturn1.sleepSeconds, runReturn2.sleepSeconds),
      nothingToDo: runReturn1.nothingToDo && runReturn2.nothingToDo,
    };
  }

  async genRunForCollateralType(collateral: number, pair: UniswapV2Pair, coinGeckoPrice: BigInt): Promise<runReturn> {
    let liquidations = this.protocol!.liquidations;
    let prices = this.protocol!.prices;
    let market = this.protocol!.market;

    let priceInfo: {
      price: BigNumber;
      priceTime: BigNumber;
      twapTime: BigNumber;
    } = await prices.viewPrice(pair.address, false);

    let blockTime = await getBlockTime();
    let minTwapTime = await prices.collateralPairMinTwapTime();
    let maxTwapTime = await liquidations.maxTwapTime();
    let maxPriceAge = await liquidations.maxPriceAge();
    let rewardLimit = (await liquidations.rewardsLimit());
    let collatReq = await market.collateralizationRequirement(collateral);

    if (!priceInfo.price.isZero()
      && priceInfo.twapTime.lt(maxTwapTime)
      && BigNumber.from(blockTime).sub(priceInfo.priceTime).lt(maxPriceAge)) {
      // This means that the price module has a valid price, so immediately liquidate if there are
      // undercollateralized positions according to that price.

      // If there are no more rewards for this price time
      if (rewardLimit.priceTime.eq(priceInfo.priceTime) && rewardLimit.remaining.isZero()) {
        let positions = await this.genUndercollatPositionsAroundPrice(collateral, bigint(collatReq), bigint(priceInfo.price))
        if (positions.length > 0) // either complete a twap and then liquidate, or calculate the time to complete a twap and then wait until then.
          console.log("need to do things.");

      } else {
        let count = await this.liquidateGivenReadyPrice(collateral, bigint(priceInfo.price), bigint(collatReq));
        return { sleepSeconds: 1, nothingToDo: count == 0 };
      }




    } else {
      let undercollatPositions = await this.genUndercollatPositionsAroundPrice(collateral, bigint(collatReq), coinGeckoPrice.valueOf());
      let countUndercollatPositions = undercollatPositions.length;
      if (countUndercollatPositions != 0) {
        this.report("Found " + countUndercollatPositions + " undercollateralized positions, with no valid price.")
        // now we must decide to either pull a price now or wait to pull a price.
        let minPriceCompletionTime = priceInfo.priceTime.add(minTwapTime).toNumber()
        let maxPriceCompletionTime = priceInfo.priceTime.add(maxTwapTime).toNumber()
        if (minPriceCompletionTime < blockTime && blockTime < maxPriceCompletionTime) {
          await prices.connect(this.wallet).updatePrice(pair.address);
        }
      }
    }
  }

  async liquidateGivenReadyPrice(collateral: number, price: bigint, collatReq: bigint): Promise<number> {
    let undercollatPositions: Array<BigNumber> = await this.genUndercollatPositionsAroundPrice(
      collateral,
      collatReq,
      price,
    );
    let countUndercollatPositions = undercollatPositions.length;
    if (countUndercollatPositions == 0) return 0;

    this.report("Found " + countUndercollatPositions + " undercollateralized positions. Discovering.")

    await this.protocol!.market.connect(this.wallet).accrueInterest();

    let liquidations = this.protocol!.liquidations;
    await liquidations.connect(this.wallet).discoverUndercollateralizedPositions(collateral, undercollatPositions);
    return countUndercollatPositions;
  }

  async genUndercollatPositionsAroundPrice(
    collateral: number,
    collatReq: bigint,
    estimatedPrice: bigint,
  ): Promise<Array<BigNumber>> {
    let accounting = this.protocol!.accounting;
    let market = this.protocol!.market;

    let collatCutoff: bigint = this._mul(collatReq, estimatedPrice);

    let priceMin = (estimatedPrice * 60n) / 100n;
    let priceMax = (estimatedPrice * 160n) / 100n;

    let minBandIndex: bigint = await this.collatBandGivenPrice(priceMin, collatReq);
    let maxBandIndex: bigint = await this.collatBandGivenPrice(priceMax, collatReq);

    let positions: Array<BigNumber> = [];
    for (let i = minBandIndex; i <= maxBandIndex; i++) {
      let newPositions = await accounting.positionsForBand(collateral, i.toString());
      positions.push.apply(positions, newPositions);
    }

    let collateralizations: Array<BigNumber> = await this.protocol!.accounting.positionsCollateralization(positions);

    let undercollatPositions: Array<BigNumber> = [];
    for (let i = 0; i < collateralizations.length; i++) {
      if (bigint(collateralizations[i]) < collatCutoff) {
        undercollatPositions.push(positions[i]);
      }
    }
    return undercollatPositions;
  }

  async collatBandGivenPrice(
    price: bigint,
    collatReq: bigint
  ): Promise<bigint> {
    let collateralization = this._mul(collatReq, price);
    return BigInt(await this.protocol!.accounting.collateralizationBand(collateralization.toString()));
  }
}

async function main() {
  let bot = new LiquidationDiscoverBot();
  await bot.run();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
