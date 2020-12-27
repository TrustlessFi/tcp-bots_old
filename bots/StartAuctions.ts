
import { BigNumber } from 'ethers';
import { ManagedBot, runReturn } from "./ManagedBot";

export class AuctionsStartBot extends ManagedBot {
  name = "🎩 StartAuctions";

  async runImpl(): Promise<runReturn> {
    await this.attachProtocol();

    let auctions = this.protocol!.auctions;
    let nothingToDo = true
    let result = await auctions.shouldStartAuctions();

    let zero = BigNumber.from(0);

    if(result.surplusAmount > zero || result.deficitAmount > zero) {
      this.report("Starting auctions. 🔥");
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
