
import '@nomiclabs/hardhat-ethers';
import { Auctions } from "../typechain/Auctions";
import hre from 'hardhat';
const e = hre.ethers;

let timer: NodeJS.Timer | null = null;

async function main() {
  while(true) {
    console.log("starting loop");
    console.log("hre", hre, "e", e)
    let AuctionsContract = await e.getContractFactory('Auctions');
    let auctions = AuctionsContract.attach('0x5eA2921A299f28526F17c27b8D5c64803bc27789') as Auctions;
    let shouldStartAuctions = await auctions.shouldStartAuctions();
    if (shouldStartAuctions.deficitAmount.toNumber() > 0 || shouldStartAuctions.surplusAmount.toNumber() > 0) {
      console.log("should start auctions");
    } else {
      console.log("should Not start auctions");
    }

    await new Promise(resolve => {
      timer = setTimeout(resolve, 5);
      return timer;
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
