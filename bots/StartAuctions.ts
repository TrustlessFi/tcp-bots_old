import { ManagedBot } from "./ManagedBot";
import { bigint, minutes } from "./library";

export class AuctionsStartBot extends ManagedBot {
  name = "🎩 StartAuctions";

  async runImpl(): Promise<number> {
    let auctions = this.protocol!.auctions;
    let result = await auctions.shouldStartAuctions();

    if(bigint(result.surplusAmount) > 0n || bigint(result.deficitAmount) > 0n) {
      this.report('Starting auctions. 🔥');
      let call = await auctions.connect(this.wallet).checkReservesAndStartAuctions();
      await call.wait(1)
    }

    return minutes(60)
  }
}

async function main() {
  let bot = new AuctionsStartBot(process.env.PRIVATE_KEY!);
  await bot.run();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
