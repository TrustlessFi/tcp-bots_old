import { ManagedBot } from "./utils/ManagedBot";
import { bigint, minutes } from "./utils/library";

export class StartAuctionsBot extends ManagedBot {
  name = "🎩 StartAuctions";

  async runImpl(): Promise<number> {
    let auctions = this.tcp!.auctions;
    let result = await auctions.shouldStartAuctions();

    if(bigint(result.surplusAmount) > 0n || bigint(result.deficitAmount) > 0n) {
      this.report('Starting auctions...');
      let call = await auctions.connect(this.wallet).checkReservesAndStartAuctions();
      await call.wait(1)
      this.report('Auctions started. 🔥');
    }

    return minutes(60)
  }
}
