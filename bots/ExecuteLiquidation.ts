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
    let accounting = this.protocol!.accounting;

    let [ethPrice, btcPrice] = await getCoinGeckoPriceInUSD(['eth', 'btc']);
    let ethLiqAcct: liquidationAccount = await accounting.getLiquidationAccount(0);
    let btcLiqAcct: liquidationAccount = await accounting.getLiquidationAccount(1);

    await this.maybeExecuteLiquidation(
      0,
      BigInt(ethPrice) * BigInt(1e18),
      ethLiqAcct,
    );
    await this.maybeExecuteLiquidation(
      1,
      BigInt(btcPrice) * BigInt(1e18),
      btcLiqAcct,
    );

    return hours(1);
  }

  async maybeExecuteLiquidation(
    collateral: number,
    collateralPrice: bigint,
    acct: liquidationAccount,
  ): Promise<void> {
    if (acct.debt.isZero() || acct.collateral.isZero()) return;

    this.report('Calling liquidate for collateral ' + collateral + '...');
    let call = await this.protocol!.extra.coinLiquidator.connect(this.wallet).liquidate(
      collateral,
      (collateralPrice * 8n / 10n).toString(),
      0,
    );
    await call.wait(1);
    this.report('Calling complete!');
  }
}
