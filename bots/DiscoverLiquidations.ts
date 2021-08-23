// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { BigNumber } from "ethers";

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
      await this.protocol!.prices.calculateInstantCollateralPrice(this.twapDuration),
    ])
    if (!rewardsAreAvailable) return this.twapDuration / 2

    let undercollateralizedPositions = await this.genUndercollatPositionsForPrice(price)

    if (undercollateralizedPositions.length > 0) {
      await this.protocol!.liquidations.connect(this.wallet).discoverUndercollateralizedPositions(undercollateralizedPositions)
    }

    return this.twapDuration / 2
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

    const lowestTick = await accounting.lowestTick()
    const minimumTick = await accounting.getTick(this.collateralizationRequirement, price);

    if (minimumTick < lowestTick) return []

    let positionsForTickPromises: Array<Promise<Array<BigNumber>>> = [];
    let tick
    for (tick = lowestTick; tick < minimumTick; tick += this.tickSpacing) {
      positionsForTickPromises.push(accounting.positionsForTick(tick))
    }

    let undercollateralizedPositions: Array<BigNumber> = [];
    // TODO use multicall
    (await Promise.all(positionsForTickPromises)).map(
      result => undercollateralizedPositions.push.apply(undercollateralizedPositions, result))

    const borderlinePositions = await accounting.positionsForTick(tick + this.tickSpacing)

    const borderlineCollateralizations: Array<BigNumber> =
      await this.protocol!.protocolDataAggregator.positionsCollateralization(borderlinePositions)

    // Check the positions that are undercollateralized given the price.
    let minCollateralization: BigNumber = this.collateralizationRequirement.mul(this.ONE).div(price)
    for (let i = 0; i < borderlineCollateralizations.length; i++) {
      if (borderlineCollateralizations[i] < minCollateralization) {
        undercollateralizedPositions.push(borderlinePositions[i])
      }
    }

    // prioritize larger positions first (TODO multicall)
    let basicPositionInfo = await Promise.all(
      undercollateralizedPositions.map(undercollateralizedPosition => accounting.getBasicPositionInfo(undercollateralizedPosition))
    )

    let positionData = []
    for (let i = 0; i < basicPositionInfo.length; i++) {
      positionData.push({positionID: undercollateralizedPositions[i], debt: basicPositionInfo[i].debtCount})
    }
    positionData.sort((position0, position1) => position0.debt.sub(position1.debt).lt(0)
      ? (this.smallestFirst ? -1 : 1)
      : (this.smallestFirst ? 1 : -1))

    return positionData.map(position => position.positionID)
  }
}
