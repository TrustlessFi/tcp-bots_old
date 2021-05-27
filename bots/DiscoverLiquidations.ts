// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { minutes } from "./utils/library";
import { BigNumber } from "ethers";

const WAIT_DURATION = minutes(60)

export class DiscoverLiquidationsBot extends ManagedBot {
  name = "🤑 Discover Liquidations";
  twapDuration = 0
  collateralizationRequirement = BigNumber.from(0)
  tickSpacing = 0
  smallestFirst = false

  async setProcessSmallestFirst(smallestFirst: boolean) {
    this.smallestFirst = smallestFirst
  }

  // =================================================================
  // ========================== ENTRY POINT ==========================
  // =================================================================
  async runImpl(): Promise<number> {
    if (this.twapDuration == 0) this.twapDuration = await this.protocol!.liquidations.twapDuration()
    if (this.collateralizationRequirement.isZero()) this.collateralizationRequirement = await this.protocol!.market.collateralizationRequirement()
    if (this.tickSpacing == 0) this.tickSpacing = await this.protocol!.accounting.TICK_SPACING()

    let [rewardsAreAvailable, price] = await Promise.all([
      await this.genAreRewardsAvailable(),
      await this.protocol!.prices.calculateInstantTwappedPrice(this.protocol!.pools.zhueth.address, this.twapDuration),
    ])
    if (!rewardsAreAvailable) return WAIT_DURATION

    let undercollateralizedPositions = await this.genUndercollatPositionsForPrice(price)

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
  async genUndercollatPositionsForPrice(price: BigNumber): Promise<Array<BigNumber>> {
    let accounting = this.protocol!.accounting;

    let priceMin = price.mul(90).div(100)
    let priceMax = price.mul(110).div(100)

    let [
      minTick,
      maxTick,
    ] = await Promise.all([
      await accounting.getTick(this.ONE.mul(this.collateralizationRequirement).div(priceMin), this.ONE),
      await accounting.getTick(this.ONE.mul(this.collateralizationRequirement).div(priceMax), this.ONE),
    ])

    if (maxTick < minTick) {
      let tempTick = maxTick
      maxTick = minTick
      minTick = tempTick
    }

    let positionsForTickPromises: Array<Promise<Array<BigNumber>>> = [];
    for (let tick = minTick; tick <= maxTick; tick += this.tickSpacing) positionsForTickPromises.push(accounting.positionsForTick(tick))

    let results = await Promise.all(positionsForTickPromises);

    let positions: Array<BigNumber> = [];
    results.map(result => positions.push.apply(positions, result))

    let collateralizations: Array<BigNumber> = await accounting.positionsCollateralization(positions);

    // Check the positions that are undercollateralized given the price.
    let minCollateralization: BigNumber = this.ONE.mul(this.collateralizationRequirement).div(price)
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
    positionData.sort((position0, position1) => position0.debt.sub(position1.debt).lt(0)
      ? (this.smallestFirst ? -1 : 1)
      : (this.smallestFirst ? 1 : -1))

    return positionData.map(position => position.positionID);
  }
}
