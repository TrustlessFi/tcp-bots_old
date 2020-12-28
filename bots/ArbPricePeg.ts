// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { minutes } from "./utils/library";

export class ArbPricePegBot extends ManagedBot {
  name = "📉 Price Arbitrage"

  async runImpl(): Promise<number> {
    return minutes(5);
  }
}
