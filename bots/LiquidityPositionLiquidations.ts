// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { hours } from "./utils/library";
import { UniswapV3Pool } from '../typechain/UniswapV3Pool'
import hre from "hardhat";
const e = hre.ethers;

import { BigNumber } from "ethers";
import { uintMax256, zeroAddress } from "./utils/library";


const feeToTickSpacing = (fee: number): number => {
  switch(fee) {
    case 500:
      return 10
    case 3000:
      return 60
    case 10000:
      return 200
    default:
      throw 'unknow fee ' + fee
  }
}

const TICKS_TO_EXAMINE = 100

export class LiquidityPositionLiquidationsBot extends ManagedBot {
  name = "🙋🏽‍♀️ Liquidity Position Liquidations";
  initialized = false
  protocolPool: UniswapV3Pool | null = null
  collateralPool: UniswapV3Pool | null = null
  referencePools: UniswapV3Pool[] | null = null

  removedLocalIDs: Map<string, boolean> = new Map()

  async runImpl(): Promise<number> {
    let rewards = this.protocol!.rewards;
    let twapDuration = await rewards.twapDuration()

    await this.ensureInitialized()

    await this.checkForOutOfRangePositionsAndLiquidate(this.protocolPool!, twapDuration)
    await this.checkForOutOfRangePositionsAndLiquidate(this.collateralPool!, twapDuration)
    for(let i = 0; i < this.referencePools!.length; i++) {
      await this.checkForOutOfRangePositionsAndLiquidate(this.referencePools![i], twapDuration)
    }

    return hours(1);
  }

  async checkForOutOfRangePositionsAndLiquidate(pool: UniswapV3Pool, twapDuration: number): Promise<void> {
    let prices = this.protocol!.prices
    let rewards = this.protocol!.rewards
    let accounting = this.protocol!.accounting

    let tick = await prices.calculateInstantTwappedTick(pool.address, twapDuration)
    let fee = await pool.fee()
    let tickSpacing = feeToTickSpacing(fee)
    let poolID = await rewards.poolIDForPool(pool.address)

    tick = tick - (tick % tickSpacing)

    let tickUpper = tick
    let belowTickPositions: BigNumber[] = [];

    let tickLower = tick
    let aboveTickPositions: BigNumber[] = [];

    for(let i = 0; i < TICKS_TO_EXAMINE; i++) {

      // TODO cache values locally and only pull later indices that have changed,
      // and calculate everything else locally
      belowTickPositions.push.apply(
        belowTickPositions,
        await accounting.indexPoolPositionsByTickUpper(poolID, tickUpper, 0, uintMax256))
      tickUpper -= tickSpacing

      aboveTickPositions.push.apply(
        aboveTickPositions,
        await accounting.indexPoolPositionsByTickUpper(poolID, tickLower, 0, uintMax256))
      tickLower += tickSpacing

    }

    let allLocalPositionIDs = belowTickPositions.concat(aboveTickPositions).map(pos => pos.toString())

    allLocalPositionIDs = allLocalPositionIDs.filter(
      localPositionID => {
        if (this.removedLocalIDs.get(localPositionID) === true) return false
        else return true
      }
    )

    let outOfRangeNFTIDs = []
    for(let i = 0; i < allLocalPositionIDs.length; i++) {
      let localPositionID = allLocalPositionIDs[i]
      let nftID = await accounting.localNftID(localPositionID)
      let position = await accounting.getPoolPosition(nftID)
      if (position.owner == zeroAddress) this.removedLocalIDs.set(localPositionID, true)
      else outOfRangeNFTIDs.push(nftID)
    }

    if (outOfRangeNFTIDs.length > 0) {
      await rewards.connect(this.wallet).liquidateOutofRangePositions(pool.address, outOfRangeNFTIDs)
    }
  }

  async ensureInitialized(): Promise<void> {
    if (!this.initialized) {
      this.initialized = true

      let governor = this.protocol!.governor
      let PoolFactory = await e.getContractFactory('UniswapV3Pool')
      this.protocolPool = PoolFactory.attach(await governor.protocolPool()) as unknown as UniswapV3Pool
      this.collateralPool = PoolFactory.attach(await governor.collateralPool()) as unknown as UniswapV3Pool

      let refPoolAddressess = await governor.getReferencePools()
      let refPools: UniswapV3Pool[] = []
      for (let i = 0; i < refPoolAddressess.length; i++) {
        refPools.push(PoolFactory.attach(refPoolAddressess[i]) as unknown as UniswapV3Pool)
      }
      this.referencePools = refPools
    }
  }
}
