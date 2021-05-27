// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { minutes } from "./utils/library";
import { BigNumber } from "ethers";

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
      await this.protocol!.prices.viewInstantTwappedPrice(this.protocol!.pools.zhueth.address, this.priceDuration),
    ])
    if (!rewardsAreAvailable) return WAIT_DURATION

    let undercollateralizedPositions = await this.genUndercollatPositionsForPrice(this.collateralizationRequirement, price)

    if (undercollateralizedPositions.length > 0) {
      await this.protocol!.liquidations.connect(this.wallet).discoverUndercollateralizedPositions(undercollateralizedPositions)
    }

    return WAIT_DURATION
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

  // given a price and a collateral type, find all of the undercollateralized positions in sorted order from most debt to least.
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
      await accounting.collateralizationBand(this.collatRatioGivenPriceAndRequirement(priceMin, collatReq)),
      await accounting.collateralizationBand(this.collatRatioGivenPriceAndRequirement(priceMax, collatReq)),
    ])

    let positionsForBandQueries: Array<Promise<Array<BigNumber>>> = [];
    for (let i = minBandIndex; i <= maxBandIndex; i++) positionsForBandQueries.push(accounting.positionsForBand(i))

    let results = await Promise.all(positionsForBandQueries);

    let positions: Array<BigNumber> = [];
    results.map(result => positions.push.apply(positions, result))

    let collateralizations: Array<BigNumber> = await accounting.positionsCollateralization(positions);

    // Check the positions that are undercollateralized given the price.
    let minCollateralization: BigNumber = this.collatRatioGivenPriceAndRequirement(price, collatReq);
    let undercollatPositions: Array<BigNumber> = [];
    for (let i = 0; i < collateralizations.length; i++) {
      if (collateralizations[i] < minCollateralization) undercollatPositions.push(positions[i]);
    }

    // prioritize larger positions first
    let basicPositionInfo = await Promise.all(
      undercollatPositions.map(undercollatPosition => accounting.getBasicPositionInfo(undercollatPosition))
    )
    let positionData = []
    for (let i = 0; i < basicPositionInfo.length; i++) {
      positionData.push({positionID: undercollatPositions[i], debt: basicPositionInfo[i].debtCount})
    }
    positionData.sort((position0, position1) => position0.debt.sub(position1.debt).lt(0) ? 1 : -1)

    return positionData.map(position => position.positionID);
  }

  collatRatioGivenPriceAndRequirement(price: BigNumber, collatReq: BigNumber) {
    return this._mul(collatReq, price);
  }
}
