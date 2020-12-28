// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { Wallet, BigNumber } from "ethers";

import { StoMS, formatTime, getBlockTime, hours, minutes } from "./library";
import { getProtocol, coinProtocol } from "./ProtocolInfo";

export type runReturn = {
  sleepSeconds: number,
  nothingToDo: boolean,
}

export const defaultRunReturn: runReturn = {
  sleepSeconds: hours(1),
  nothingToDo: true,
}

export class ManagedBot {
  protocol: coinProtocol | null = null;
  name: string = "Name not set.";
  shouldLog: boolean = true;
  timer: NodeJS.Timer | null = null;
  ONE = BigInt(1e18);

  constructor() {}

  async runImpl(): Promise<number> {
    throw new Error("runImpl not overriden.");
  }

  async attachProtocol(): Promise<void> {
    if (this.protocol == null) this.protocol = await getProtocol();
  }

  async getBlockTime(): Promise<number> {
    return await getBlockTime();
  }

  _div(a: bigint, b: bigint): bigint {
    return this._mulDiv(a, this.ONE, b);
  }

  _mul(a: bigint, b: bigint): bigint {
    return this._mulDiv(a, b, this.ONE);
  }

  _mulDiv(a: bigint, b: bigint, c: bigint): bigint {
    return (a * b) / c;
  }

  async run() {
    this.report("Starting. 🏁");

    await this.attachProtocol();

    while(true) {
      this.report("Waking up! ☕️");
      let waitTime = minutes(60);
      try {
         waitTime = await this.runImpl();
      } catch (error) {
        this.reportError(error)
      }
      this.report("Sleeping 💤 for " + formatTime(waitTime));

      await new Promise(resolve => {
        this.timer = setTimeout(resolve, StoMS(waitTime))
        return this.timer;
      });
    }
  }

  // wake up a bot if it is sleeping
  async wakeup() {
    if (this.timer != null) {
      clearTimeout(this.timer);
      await this.run();
    }
  }

  // ============= REPORTING FUNCTIONS ==================
  report(message: string) {
    if (!this.shouldLog) return;
    console.log(this.name + ": " + message);
  }

  reportError(error: Error) {
    if (!this.shouldLog) return;
    this.report(">>>> ❌ Caught Error ❌ <<<<");
    this.report(error.name);
    this.report(error.message);
    if (error.stack != null && false) this.report(error.stack!);
  }
}
