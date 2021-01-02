// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import { ManagedBot } from "./utils/ManagedBot";
import { hours, getCoinGeckoPriceInUSD } from "./utils/library";
import { BigNumber } from 'ethers';


type liquidationAccount = {
  startDebtExchangeRate: BigNumber;
  debt: BigNumber;
  collateral: BigNumber;
}

export class ExecuteLiquidationBot extends ManagedBot {
  name = "🎆 Execute Liquidate";

  async runImpl(): Promise<number> {
    return hours(1);
  }
}
