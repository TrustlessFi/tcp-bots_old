// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { BigNumber } from "ethers";
import { ManagedBot } from "./utils/ManagedBot";
import { minutes, hours } from "./utils/library";

export class UpdateRatesBot extends ManagedBot {
  name = '📈 UpdateRates';

  async runImpl(): Promise<number> {
    let rates = this.protocol!.rates;

    let currentRateData = await rates.currentRateData();
    let nextUpdate: number = currentRateData.nextUpdateTime.toNumber();
    let reward: BigNumber = currentRateData.rewardCount;

    let cnpRequired: BigNumber = await this.genCnpRequired();
    let halfReward: BigNumber = reward.div(2);

    let executionTime: number =
      (cnpRequired.sub(halfReward)).div(halfReward).mul(minutes(30)).add(nextUpdate).toNumber();

    if (executionTime < nextUpdate) executionTime = nextUpdate;

    let now = await this.getBlockTime();
    if (executionTime < now + 1) {
      this.report("Calling update...");
      let call = await rates.connect(this.wallet).update();
      await call.wait(1);
      this.report("Update complete. 🔥");

      return (await rates.minTimeBetweenUpdates()).toNumber();
    } else {
      let timeout = (executionTime - now) - 1;
      return timeout < minutes(20) ? timeout : timeout / 2;
    }
  }

  async genCnpRequired(): Promise<BigNumber> {
    // TODO make this calculation more complex, involving gas price and CNP price
    return BigNumber.from(120).mul(BigInt(1e18).toString());
  }
}
