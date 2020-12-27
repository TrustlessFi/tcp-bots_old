// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot, runReturn, defaultRunReturn } from "./ManagedBot";
import { getBlockTime, hours, getCoinGeckoPriceInUSD } from "./library";
import { BigNumber } from "ethers";
import { UniswapV2Pair } from "../typechain/UniswapV2Pair";

export class LiquidationDiscoverBot extends ManagedBot {
  name = "🤑 Discover Liquidate";

  async runImpl(): Promise<runReturn> {
    let wethPair = this.protocol!.pairs.coinweth;
    let rbtcPair = this.protocol!.pairs.coinbtc;

    let [ethPrice, btcPrice] = await getCoinGeckoPriceInUSD(['eth', 'btc']);

    let protocolFmt = (price: number): BigInt => BigInt(Math.floor(price)) * BigInt(1e18);

    let runReturn1 = await this.genRunForCollateralType(0, wethPair, protocolFmt(ethPrice));
    let runReturn2 = await this.genRunForCollateralType(1, rbtcPair, protocolFmt(btcPrice));
    return {
      sleepSeconds: Math.min(runReturn1.sleepSeconds, runReturn2.sleepSeconds),
      nothingToDo: runReturn1.nothingToDo && runReturn2.nothingToDo,
    };
  }

  async genRunForCollateralType(collateral: number, pair: UniswapV2Pair, coinGeckoPrice: BigInt): Promise<runReturn> {
    let runReturn = defaultRunReturn;
    runReturn.nothingToDo = false;

    let liquidations = this.protocol!.liquidations!;
    let prices = this.protocol!.prices;

    let priceTwapTime = await liquidations.twapTime();
    let priceInfo: {
      price: BigNumber;
      priceTime: BigNumber;
      twapTime: BigNumber;
    } = await prices.viewPrice(pair.address, false);

    let blockTime = await getBlockTime();
    let maxTwapTime = await liquidations.maxTwapTime();
    let maxPriceAge = await liquidations.maxPriceAge();

    price = coinGeckoPrice;
    if (!priceInfo.price.isZero()
      && priceInfo.twapTime.lt(maxTwapTime)
      && BigNumber.from(blockTime).sub(priceInfo.priceTime).lt(maxPriceAge)) {
      price =

    }





    let price = status.price;
    let collatReq = await liquidations.collateralizationRequirement(collateral);

    if (price != 0n) {
      await this.liquidateGivenReadyPrice(collateral, price, collatReq);
      runReturn.sleepSeconds = hours(1);
      return runReturn;
    }

    price = this.bi(await prices.getInstantaneousPrice(pair.address));

    let undercollatAccountAddresses: Array<string> = await this.genUndercollatPositionsAroundPrice(
      collateral,
      collatReq,
      price,
    );

    if (undercollatAccountAddresses.length == 0) {
      runReturn.sleepSeconds = hours(1);
      return runReturn;
    }

    let priceTime: bigint = this.bi(status.time);
    let currentTime = BigInt(await blockTime());

    if (currentTime - priceTime > (priceTwapTime * 3n) / 2n) {
      // price is NOT initialized
      // there are undercollateralized positions but no price initialized, so begin the twap
      await liquidations.connect(this.wallet).updatePrice(collateral);
      runReturn.sleepSeconds = Number(priceTwapTime);
      return runReturn;
    }

    if (currentTime > priceTime + priceTwapTime) {
      // there are undercollateralized positions and an initialized price that is ready to be finalized.
      // finalize the price and liquidate.
      // could also recheck which positions are undercollateralized given the final price.
      await liquidations.updatePrice(collateral);
      return await this.genRunForCollateralType(collateral, pair);
    }
    // telse the price is initialized and there are undercollateralized positions, but we need to wait
    // to finalize the price.
    runReturn.nothingToDo = true;
    runReturn.sleepSeconds = Number((priceTime + priceTwapTime) - currentTime);
    return runReturn;
  }

  async liquidateGivenReadyPrice(collateral: number, price: bigint, collatReq: bigint): Promise<void> {
    let undercollatAccountAddresses: Array<string> = await this.genUndercollatPositionsAroundPrice(
      collateral,
      collatReq,
      price,
    );
    if (undercollatAccountAddresses.length == 0) return;

    let liquidations = this.protocol!.liquidations;
    await liquidations.connect(this.wallet).discoverUndercollateralizedAccounts(undercollatAccountAddresses, collateral);
  }

  async genUndercollatPositionsAroundPrice(
    collateral: number,
    collatReq: bigint,
    estimatedPrice: bigint,
  ): Promise<Array<string>> {
    let accounting = this.protocol!.accounting;
    let market = this.protocol!.market;

    let priceMin = (estimatedPrice * 60n) / 100n;
    let priceMax = (estimatedPrice * 160n) / 100n;

    let collatCutoff: bigint = this._mul(collatReq, estimatedPrice);
    let minBandIndex: bigint = await this.collatBandGivenPrice(priceMin, collatReq);
    let maxBandIndex: bigint = await this.collatBandGivenPrice(priceMax, collatReq);

    let addresses: Array<string> = [];
    for (let i = minBandIndex; i <= maxBandIndex; i++) {
      let newAddresses = await accounting.accountsForBandIndex(collateral, i);
      addresses.push.apply(addresses, newAddresses);
    }

    await market.connect(this.wallet).accrueInterest();
    let collateralizations: Array<BigNumber> = await market.accountsCollateralization(addresses, collateral);

    let undercollatAccountAddresses: Array<string> = [];
    for (let i = 0; i < collateralizations.length; i++) {
      if (this.bi(collateralizations[i]) < collatCutoff) {
        undercollatAccountAddresses.push(addresses[i]);
      }
    }
    return undercollatAccountAddresses;
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
