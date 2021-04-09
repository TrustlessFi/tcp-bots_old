// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { getBlockTime, hours, minutes, seconds, getCoinGeckoPriceInUSD, bigint } from "./utils/library";
import { BigNumber } from "ethers";
import { UniswapV3Pool } from "../typechain/UniswapV3Pool";


const WAIT_DURATION = minutes(60)

export class DiscoverLiquidationsBot extends ManagedBot {
  name = "🤑 Discover Liquidations";
  priceDuration = 0
  collateralizationRequirement = BigNumber.from(0)

  // =================================================================
  // ========================== ENTRY POINT ==========================
  // =================================================================
  async runImpl(): Promise<number> {

    if (this.priceDuration == 0) this.priceDuration = await this.protocol!.liquidations.liquidationTwapDurationSeconds()
    if (this.collateralizationRequirement.isZero()) this.collateralizationRequirement = await this.protocol!.market.collateralizationRequirement()

    let [rewardsAreAvailable, price] = await Promise.all([
      await this.genAreRewardsAvailable(),
      await this.protocol!.prices.viewInstantTwappedPrice(this.protocol!.pools.coineth, this.priceDuration),
    ])
    if (!rewardsAreAvailable) return hours(1)

    let undercollateralizedPositions = await this.genUndercollatPositionsForPrice(this.collateralizationRequirement, price)

    if (undercollateralizedPositions.length > 0) {
      await this.protocol!.liquidations.discoverUndercollateralizedPositions(undercollateralizedPositions)
    }

    return hours(1)
  }

  // =================================================================
  // ====================== COMPUTATION LOGIC ========================
  // =================================================================
  // Check if there are any rewards available for the current price pull
  async genAreRewardsAvailable(): Promise<boolean> {
    let liquidations = this.protocol!.liquidations

    let [
      rewardsLimitInfo,
      currentLiquidationPeriod,
    ] = await Promise.all([
      await liquidations.rewardsLimit(),
      await liquidations.currentPeriod(),
    ])

    if (rewardsLimitInfo.period < currentLiquidationPeriod) return true;
    return !rewardsLimitInfo.remaining.isZero()
  }

  // given a price and a collateral type, find all of the undercollateralized positions.
  async genUndercollatPositionsForPrice(
    collatReq: BigNumber,
    price: BigNumber,
  ): Promise<Array<BigNumber>> {
    let accounting = this.protocol!.accounting;


    let priceMin = price.mul(80).div(100)
    let priceMax = price.mul(120).div(100)

    let [
      minBandIndex,
      maxBandIndex,
    ] = await Promise.all([
      await this.protocol!.accounting.collateralizationBand(this.collatRatioGivenPriceAndRequirement(priceMin, collatReq)),
      await this.protocol!.accounting.collateralizationBand(this.collatRatioGivenPriceAndRequirement(priceMax, collatReq)),
    ])

    let positions: Array<BigNumber> = [];
    for (let i = minBandIndex; i <= maxBandIndex; i++) {
      let newPositions = await accounting.positionsForBand(i.toString());
      positions.push.apply(positions, newPositions);
    }

    let collateralizations: Array<BigNumber> = await this.protocol!.accounting.positionsCollateralization(positions);

    // Check the positions that are undercollateralized given the price.
    let minCollateralization: BigNumber = this.collatRatioGivenPriceAndRequirement(price, collatReq);
    let undercollatPositions: Array<BigNumber> = [];
    for (let i = 0; i < collateralizations.length; i++) {
      if (collateralizations[i] < minCollateralization) {
        undercollatPositions.push(positions[i]);
      }
    }
    return undercollatPositions;
  }

  collatRatioGivenPriceAndRequirement(price: BigNumber, collatReq: BigNumber) {
    return this._mul(collatReq, price);
  }
}
