// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { Wallet, BigNumber } from "ethers";

import { StoMS, formatTime, getBlockTime, hours } from "./library";
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

  async runImpl(): Promise<typeof defaultRunReturn> {
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

    console.log("here!")
    await this.attachProtocol();

    while(true) {
      this.report("Waking up! ☕️");
      let result: typeof defaultRunReturn = defaultRunReturn;
      try {
        result = await this.runImpl();
      } catch (error) {
        this.reportError(error)
        result.nothingToDo = false;
      }
      if (result.nothingToDo) this.report("Nothing to do. 🤷🏽‍♀️");
      let sleepSeconds = result.sleepSeconds;
      this.report("Sleeping 💤 for " + formatTime(sleepSeconds));

      await new Promise(resolve => {
        this.timer = setTimeout(resolve, StoMS(sleepSeconds))
        return this.timer;
      });
    }
  }

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
