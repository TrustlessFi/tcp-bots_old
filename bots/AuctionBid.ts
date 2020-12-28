// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { hours } from "./utils/library";

export class AuctionBidBot extends ManagedBot {
  name = "🙋🏽‍♀️ Auction Bid";

  async runImpl(): Promise<number> {
    return hours(1);
  }
}
