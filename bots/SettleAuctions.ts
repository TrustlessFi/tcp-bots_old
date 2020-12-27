
import { ManagedBot, runReturn } from "./ManagedBot";
import { hours } from "./library";

export class SettleAuctionsBot extends ManagedBot {
  name = "✅ SettleAuctions";

  async runImpl(): Promise<runReturn> {
    let auctions = this.protocol!.auctions;
    let runReturn = {sleepSeconds: hours(1), nothingToDo: true}
    let auctionsSettled = 0;

    let surplusAuctionCount = await auctions.surplusAuctionCount();
    let deficitAuctionCount = await auctions.deficitAuctionCount();

    for(let i = 0; i < surplusAuctionCount.toNumber(); i++) {
      let readyToBeSettled = await auctions.surplusAuctionComplete(i);
      // TODO make this smarter and not go through every auction every time, and start from the largest
      // auction index below which there are no active or unsettled auctions.

      if (readyToBeSettled) {
        this.report("Settling surplus auction " + i + ". 🔥");
        await auctions.settleSurplusAuction(i);
        auctionsSettled++;
      }
    }

    for(let i = 0; i < deficitAuctionCount.toNumber(); i++) {
      let readyToBeSettled = await auctions.deficitAuctionComplete(i);

      if (readyToBeSettled) {
        this.report("Settling deficit auction " + i + ". 🔥");
        await auctions.settleDeficitAuction(i);
        auctionsSettled++;
      }
    }

    if (auctionsSettled > 0) {
      this.report("Settled " + auctionsSettled + " auctions ❗️");
      runReturn.nothingToDo = false;
    }

    return runReturn;
  }
}

async function main() {
  let bot = new SettleAuctionsBot();
  await bot.run();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
