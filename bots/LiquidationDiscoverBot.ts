// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./ManagedBot";
import { getBlockTime, hours, seconds, getCoinGeckoPriceInUSD, bigint } from "./library";
import { BigNumber } from "ethers";
import { UniswapV2Pair } from "../typechain/UniswapV2Pair";

type priceInfoType = {
  coinGeckoPrice: bigint,
  protocolPriceUsable: boolean,
  collateral: number,
  collatReq: BigNumber,
  pair: UniswapV2Pair,
  undercollatPositions: Array<BigNumber>,
  protocolPriceInfo: {
    price: BigNumber,
    priceTime: BigNumber,
    twapTime: BigNumber,
  }
}

/*
 *     START: For each collateral type: Is there a valid price from Prices now?
 *                 /                              \
 *               yes                              no
 *               /                                 \
 *      Are there undercollateralized          Are there undercollateralized positions
 *      positions at that price?       at the external price of the collateral? (coingecko)
 *            /             \               /              |
 *          yes             no            no               |
 *          /                \           /                 |
 *        Are there      return to start in 1 hour        yes
 *      rewards to be                                      |
 *      claimed for this price?                            |
 *      /               \                                  |
 *    yes               no ----------------> We need a new protocol price.
 *    /                                  Has the minimum twap time passed since the last twap?
 *   /                                      /                 \
 * liquidate, then return to START         no                 yes
 *                                        /                    \
 *                                return to START        If the max twap time has passed, start a NEW twap.
 *                               after time to next      If it hasn't: liquidate. (liquidate completes the twap automatically)
 *                       possible price pull has elapsed
 */
export class LiquidationDiscoverBot extends ManagedBot {
  name = "🤑 Discover Liquidate";

  // =================================================================
  // ========================== ENTRY POINT ==========================
  // =================================================================
  async runImpl(): Promise<number> {
    let wethPair = this.protocol!.pairs.coinweth;
    let btcPair = this.protocol!.pairs.coinbtc;

    let [ethPrice, btcPrice] = await getCoinGeckoPriceInUSD(['eth', 'btc']);

    let fmtPriceProtocol = (price: number): bigint => BigInt(Math.floor(price)) * BigInt(1e18);

    let wethWaitTime = await this.genRunForCollateralType(0, wethPair, fmtPriceProtocol(ethPrice));
    let btcWaitTime = await this.genRunForCollateralType(1, btcPair, fmtPriceProtocol(btcPrice));
    return Math.min(wethWaitTime, btcWaitTime);
  }

  // =================================================================
  // ======================= DECISION TREE ===========================
  // =================================================================
  // initialize info about the price and collateralization requirements
  async genRunForCollateralType(collateral: number, pair: UniswapV2Pair, coinGeckoPrice: bigint): Promise<number> {
    let priceInfo: priceInfoType = await this.genPriceInfo(collateral, pair, coinGeckoPrice);

    return await this.checkExistLiquidationsAtPrice(priceInfo);
  }

  // check if there are undercollateralized positions at protocol price if its valid, or the external
  // price (coingecko or another api). If there are no undercollateralized positions, stop.
  async checkExistLiquidationsAtPrice(priceInfo: priceInfoType): Promise<number> {
    let price = priceInfo.protocolPriceUsable
      ? bigint(priceInfo.protocolPriceInfo.price)
      : priceInfo.coinGeckoPrice;

    let collatReq = await this.protocol!.market.collateralizationRequirement(priceInfo.collateral);
    let positions = await this.genUndercollatPositionsForPrice(priceInfo.collateral, bigint(collatReq), price);

    // If there are no undercollateralized positions then come back later.
    if (positions.length == 0) return await this.resultNothingToDo();
    priceInfo.undercollatPositions = positions;

    // if there are undercollateralized positions and we have a protocol confirmed usable price,
    // check if there are liquidation rewards available
    if (priceInfo.protocolPriceUsable) return await this.checkRewardsAvailableForPrice(priceInfo);
    // If there are undercollateralized positions and we dont have a protocol usable price
    // figure out how to complete one
    else return await this.checkHowToCompleteAPrice(priceInfo);
  }

  // if there are undercollateralized positions and a usable protocol price,
  // check if there are any rewards available for the price.
  async checkRewardsAvailableForPrice(priceInfo: priceInfoType): Promise<number> {
    let rewardsAvailableForPrice = await this.genAreRewardsAvailable(priceInfo);
    // if there are rewards available, liquidate and then start the loop over
    if (rewardsAvailableForPrice) return await this.resultLiquidate(priceInfo);
    // if there are not rewards available, check how to complete a new price for refreshed rewards.
    else return await this.checkHowToCompleteAPrice(priceInfo);
  }

  // if there are undercollateralized positions but no usable price, figure out how to complete the price.
  async checkHowToCompleteAPrice(priceInfo: priceInfoType): Promise<number> {
    let now = await getBlockTime();
    let minTwapTime = await this.protocol!.prices.collateralPairMinTwapTime();
    let maxTwapTime = await this.protocol!.liquidations.maxTwapTime();
    let earliestPriceCompletionTime = priceInfo.protocolPriceInfo.priceTime.add(minTwapTime);
    let maxPriceCompletionTime = priceInfo.protocolPriceInfo.priceTime.add(maxTwapTime);

    if (earliestPriceCompletionTime.lt(now)) {
      if (BigNumber.from(now).lt(maxPriceCompletionTime)) {
        // if a new price can be pulled now, liquidate, which will pull the price automatically
        // we are only here because we believe there are undercollateralized positions.
        return await this.resultLiquidate(priceInfo);
      } else {
        // if a new price can't be completed but can be initialized, initialize the price.
        // and then come back after the min twaptime.
        return await this.resultInitializePrice(priceInfo, minTwapTime);
      }
    } else {
      // else if there is already a price initialized but its too early to complete it,
      // come back when it can be completed.
      return await this.resultReturnAtNextPriceTime(earliestPriceCompletionTime.toNumber() - now);
    }
  }

  // =================================================================
  // ====================== POSSIBLE RESULTS =========================
  // =================================================================
  async resultNothingToDo(): Promise<number> {
    return hours(1);
  }

  async resultReturnAtNextPriceTime(timeUntilNextPriceTime: number): Promise<number> {
    return timeUntilNextPriceTime;
  }

  async resultLiquidate(priceInfo: priceInfoType): Promise<number> {
    let positions = priceInfo.undercollatPositions;
    // sanity check, thi should not throw.
    if (positions.length == 0) throw new Error('No undercollateralized positions in liquidate.');

    // liquidate
    let call = await this.protocol!.liquidations.connect(this.wallet).discoverUndercollateralizedPositions(priceInfo.collateral, positions);
    await call.wait(1);

    // evaluate from the top of the tree immediately again in order to complete a new price
    // if needed to finish liquidating all positions.
    return seconds(1);
  }

  async resultInitializePrice(priceInfo: priceInfoType, minTwapTime: BigNumber): Promise<number> {
    // update price
    let call = await this.protocol!.prices.connect(this.wallet).updatePrice(priceInfo.pair.address);
    await call.wait(1);

    // return at the earliest time this price could be completed.
    return seconds(minTwapTime.toNumber());
  }

  // =================================================================
  // ====================== COMPUTATION LOGIC ========================
  // =================================================================
  async genPriceInfo(collateral: number, pair: UniswapV2Pair, coinGeckoPrice: bigint): Promise<priceInfoType> {
    let protocolPriceInfo: {
      price: BigNumber;
      priceTime: BigNumber;
      twapTime: BigNumber;
    } = await this.protocol!.prices.viewPrice(pair.address, false);

    let blockTime = await getBlockTime();
    let liquidations = this.protocol!.liquidations;
    let maxPriceAge = await liquidations.maxPriceAge();
    let maxTwapTime = await liquidations.maxTwapTime();

    let protocolPriceUsable = false
    if (!protocolPriceInfo.price.isZero()
      && protocolPriceInfo.twapTime.lt(maxTwapTime)
      && BigNumber.from(blockTime).sub(protocolPriceInfo.priceTime).lt(maxPriceAge)) {
      protocolPriceUsable = true;
    }

    return {
      coinGeckoPrice: coinGeckoPrice,
      collateral: collateral,
      pair: pair,
      collatReq: await this.protocol!.market.collateralizationRequirement(collateral),
      undercollatPositions: [],
      protocolPriceUsable: protocolPriceUsable,
      protocolPriceInfo: protocolPriceInfo,
    };
  }

  // Check if there are any rewards available for the current price pull
  async genAreRewardsAvailable(priceInfo: priceInfoType): Promise<boolean> {
    let rewardsLimitInfo: { remaining: BigNumber; priceTime: BigNumber } =
      await this.protocol!.liquidations.rewardsLimit(priceInfo.collateral);
    if (rewardsLimitInfo.priceTime != priceInfo.protocolPriceInfo.priceTime) return true;
    return rewardsLimitInfo.remaining.gt(BigNumber.from(0));
  }

  // given a price and a collateral type, find all of the undercollateralized positions.
  async genUndercollatPositionsForPrice(
    collateral: number,
    collatReq: bigint,
    price: bigint,
  ): Promise<Array<BigNumber>> {
    let accounting = this.protocol!.accounting;
    let market = this.protocol!.market;

    let collatCutoff: bigint = this._mul(collatReq, price);

    let priceMin = (price * 60n) / 100n;
    let priceMax = (price * 160n) / 100n;

    let minBandIndex: bigint = await this.collatBandGivenPrice(priceMin, collatReq);
    let maxBandIndex: bigint = await this.collatBandGivenPrice(priceMax, collatReq);

    let positions: Array<BigNumber> = [];
    for (let i = minBandIndex; i <= maxBandIndex; i++) {
      let newPositions = await accounting.positionsForBand(collateral, i.toString());
      positions.push.apply(positions, newPositions);
    }

    let collateralizations: Array<BigNumber> = await this.protocol!.accounting.positionsCollateralization(positions);

    // Check the positions that are undercollateralized given the price.
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
  let bot = new LiquidationDiscoverBot(process.env.PRIVATE_KEY!);
  await bot.run();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
