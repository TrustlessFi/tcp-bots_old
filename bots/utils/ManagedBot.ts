// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from "hardhat"
const e = hre.ethers

import * as ethers from 'ethers'
import { Wallet, BigNumber } from "ethers"

import { getDeployedTcp, getDeployedTDao, tcpProtocol, tdaoProtocol } from '@trustlessfi/protocol'
import { chainAddresses } from "@trustlessfi/addresses"

import { StoMS, formatTime, getBlockTime, hours, minutes } from "./library"

export type runReturn = {
  sleepSeconds: number,
  nothingToDo: boolean,
}

export const defaultRunReturn: runReturn = {
  sleepSeconds: hours(1),
  nothingToDo: true,
}

export class ManagedBot {

  // ============= CLASS DEFINITION ==================
  tcp: tcpProtocol | null = null
  tdao: tdaoProtocol | null = null
  name: string = "Name not set."
  shouldLog: boolean = true
  timer: NodeJS.Timeout | null = null
  wallet: Wallet
  chainAddresses: chainAddresses | undefined
  ONE: BigNumber = BigNumber.from(BigInt(1e18))

  constructor(config: {
    privateKey: string,
    provider?: ethers.providers.JsonRpcProvider,
    chainAddresses?: chainAddresses,
  }) {
    const provider = config.provider ? config.provider : e.provider
    this.wallet = new Wallet(config.privateKey, provider)
    this.chainAddresses = config.chainAddresses
  }

  // ============= INITIALIZATION AND RUN ==================
  async initialize() {
    this.tcp =
      this.chainAddresses
        ? await getDeployedTcp(this.chainAddresses)
        : await getDeployedTcp()
    this.tdao =
      this.chainAddresses
        ? await getDeployedTDao(this.chainAddresses)
        : await getDeployedTDao()
    return this
  }

  async run() {
    this.report("Starting. 🏁")

    if (this.tcp === undefined || this.tdao || undefined) throw 'not initialized'

    while(true) {
      this.report("Waking up! ☕️")
      let waitTime = minutes(60)
      try {
         waitTime = await this.runImpl()
      } catch (error: any) {
        this.reportError(error)
      }
      this.report("Sleeping 💤 for " + formatTime(waitTime))

      await new Promise(resolve => {
        this.timer = setTimeout(resolve, StoMS(waitTime))
        return this.timer
      })
    }
  }

  async runImpl(): Promise<number> {
    throw new Error("runImpl not overriden.")
  }

  // wake up a bot if it is sleeping
  async wakeup() {
    if (this.timer != null) {
      clearTimeout(this.timer)
      await this.run()
    }
  }

  // ============= LOGGING FUNCTIONS ==================
  report(message: string) {
    if (!this.shouldLog) return
    console.log(this.name + ": " + message)
  }

  reportError(error: Error) {
    if (!this.shouldLog) return
    this.report(">>>> ❌ Caught Error ❌ <<<<")
    this.report(error.name)
    this.report(error.message)
    if (error.stack != null) this.report(error.stack!)
  }

  // ============= UTILS ==================
  async getBlockTime(): Promise<number> {
    return await getBlockTime()
  }

  _div(a: BigNumber, b: BigNumber): BigNumber {
    return this._mulDiv(a, this.ONE, b)
  }

  _mul(a: BigNumber, b: BigNumber): BigNumber {
    return this._mulDiv(a, b, this.ONE)
  }

  _mulDiv(a: BigNumber, b: BigNumber, c: BigNumber): BigNumber {
    return a.mul(b).div(c)
  }
}
