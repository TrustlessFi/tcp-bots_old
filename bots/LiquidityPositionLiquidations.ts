// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { hours } from "./utils/library";

import { BigNumber } from "ethers";
import {
  UniswapV3Factory,
  NonfungiblePositionManager,
  Rewards,
  Prices,
  Accounting,
} from '../typechain/'

type position = {
  nftID: number,
  poolID: number,
  tickLower: number,
  tickUpper: number,
}

export class LiquidityPositionLiquidationsBot extends ManagedBot {
  name = "🙋🏽‍♀️ Liquidity Position Liquidations";
  initialized = false

  countPools = 0
  pools: string[] = []

  posNFT: NonfungiblePositionManager | null = null
  factory: UniswapV3Factory | null = null
  rewards: Rewards | null = null
  prices: Prices | null = null
  accounting: Accounting | null = null
  twapDuration: number | null = null

  positionIDs: number[] = []
  positionIndex: Map<number, position> = new Map()

  idFetchBatchSize = 10000
  positionFetchBatchSize = 10
  poolCache: Map<string, number> = new Map()

  async runImpl(): Promise<number> {
    await this.ensureInitialized()
    await this.indexAllPositions()

    for(let i = 0; i < this.pools!.length; i++) {
      await this.checkForOutOfRangePositionsAndLiquidate(this.pools![i], this.twapDuration!)
    }

    return hours(1);
  }

  poolKey(t0: string, t1: string, fee: number) {
    const poolOrder = [t0, t1].sort()
    return poolOrder[0] + poolOrder[1] + fee.toString()
  }

  async getPoolIDCached(token0: string, token1: string, fee: number): Promise<number> {
    const poolKey = this.poolKey(token0, token1, fee)
    const poolID = this.poolCache.get(poolKey)
    if (poolID !== undefined) return poolID

    const fetchedPoolAddress = await this.factory!.getPool(token0, token1, fee)
    const fetchedPoolID = await this.rewards!.poolIDForPool(fetchedPoolAddress)

    this.poolCache.set(poolKey, fetchedPoolID)
    return fetchedPoolID
  }

  async indexAllPositions() {
    const _min = (a: number, b:number): number => a < b ? a : b

    const posNFT = this.protocol!.external.nftPositionManager
    const bal = (await posNFT.balanceOf(this.protocol!.accounting.address)).toNumber()
    let limit = 0

    let newPositionIDs: number[] = []

    while(limit < bal) {
      const lowerLimit = limit
      limit += _min(bal - limit, this.idFetchBatchSize);
      (await this.protocol!.accounting.getLockedNFTIDs(lowerLimit, limit)).map((pos: BigNumber) => {
        if (!this.positionIndex.has(pos.toNumber())) newPositionIDs.push(pos.toNumber())
      })
    }

    limit = 0
    const totalCount = newPositionIDs.length
    while(limit < totalCount) {
      const lowerLimit = limit
      limit += _min(totalCount - limit, this.positionFetchBatchSize)
      await Promise.all(newPositionIDs.slice(lowerLimit, limit).map(async newPositionID => {
        const _position = await posNFT.positions(newPositionID)
        this.positionIndex.set(newPositionID, {
          nftID: newPositionID,
          poolID: await(this.getPoolIDCached(_position.token0, _position.token1, _position.fee)),
          tickLower: _position.tickLower,
          tickUpper: _position.tickUpper,
        })
      }))
    }
  }

  async getPoolPositionsByPool(pool: string): Promise<position[]> {
    const poolID = await this.rewards!.poolIDForPool(pool)
    if (poolID === 0) throw 'Invalid pool'
    const iterator = this.positionIndex.values()
    let _positions: position[] = []
    while(true) {
      const pos = (iterator.next()).value as position | undefined
      if (pos === undefined) break
      if (pos.poolID === poolID) _positions.push(pos)
    }
    return _positions
  }

  async checkForOutOfRangePositionsAndLiquidate(pool: string, twapDuration: number): Promise<void> {
    const _positions = await this.getPoolPositionsByPool(pool)
    const tick = await this.prices!.calculateInstantTwappedTick(pool, twapDuration)

    let outOfRangeNFTIDs: number[] = []

    _positions.map(_position => {
      if (tick < _position.tickLower || _position.tickUpper <= tick) {
        outOfRangeNFTIDs.push(_position.nftID)
      }
    })

    if (outOfRangeNFTIDs.length > 0) {
      this.report('liquidating positions ' + outOfRangeNFTIDs.join(', ') + ' from pool ' + pool)
      await this.rewards!.connect(this.wallet).liquidateOutofRangePositions(pool, outOfRangeNFTIDs)
    }
  }

  async ensureInitialized(): Promise<void> {
    if (!this.initialized) {
      this.initialized = true

      this.posNFT = this.protocol!.external.nftPositionManager
      this.factory = this.protocol!.external.factory
      this.rewards = this.protocol!.rewards
      this.prices = this.protocol!.prices
      this.accounting = this.protocol!.accounting

      const countPools = await this.rewards.countPools()
      if (countPools != this.countPools) {
        for(let poolID = this.countPools + 1; poolID <= countPools; poolID++) {
          this.pools.push((await this.rewards.poolConfigForPoolID(poolID)).pool)
        }
        this.countPools = countPools
      }

    }

    this.twapDuration = await this.rewards!.twapDuration()
  }
}
