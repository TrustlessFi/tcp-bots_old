import { ManagedBot, runReturn } from "./ManagedBot";
import { bigint } from "./library";

export class AuctionsStartBot extends ManagedBot {
  name = "🎩 StartAuctions";

  async runImpl(): Promise<runReturn> {
    let auctions = this.protocol!.auctions;
    let nothingToDo = true
    let result = await auctions.shouldStartAuctions();

    if(bigint(result.surplusAmount) > 0n || bigint(result.deficitAmount) > 0n) {
      this.report('Starting auctions. 🔥');
      await auctions.checkReservesAndStartAuctions();
      nothingToDo = false;
    }

    return {
      sleepSeconds: 30,
      nothingToDo: nothingToDo,
    };
  }
}

async function main() {
  let bot = new AuctionsStartBot();
  await bot.run();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
