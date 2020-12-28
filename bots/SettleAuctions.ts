
import { ManagedBot } from "./utils/ManagedBot";
import { minutes } from "./utils/library";

export class SettleAuctionsBot extends ManagedBot {
  name = "✅ SettleAuctions";

  async runImpl(): Promise<number> {
    let auctions = this.protocol!.auctions;
    let auctionsSettled = 0;

    let surplusAuctionCount = await auctions.surplusAuctionCount();
    let deficitAuctionCount = await auctions.deficitAuctionCount();

    for(let i = 0; i < surplusAuctionCount.toNumber(); i++) {
      let readyToBeSettled = await auctions.surplusAuctionComplete(i);
      // TODO make this smarter and not go through every auction every time, and start from the largest
      // auction index below which there are no active or unsettled auctions.
      if (readyToBeSettled) {
        this.report("Settling surplus auction " + i + ". 🔥");
        let call = await auctions.connect(this.wallet).settleSurplusAuction(i);
        await call.wait(1);

        auctionsSettled++;
      }
    }

    for(let i = 0; i < deficitAuctionCount.toNumber(); i++) {
      let readyToBeSettled = await auctions.deficitAuctionComplete(i);

      if (readyToBeSettled) {
        this.report("Settling deficit auction " + i + ". 🔥");
        let call = await auctions.connect(this.wallet).settleDeficitAuction(i);
        await call.wait(1)

        auctionsSettled++;
      }
    }

    if (auctionsSettled > 0) this.report("Settled " + auctionsSettled + " auctions ❗️");

    return minutes(60);
  }
}

async function main() {
  let bot = new SettleAuctionsBot(process.env.PRIVATE_KEY!);
  await bot.run();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
