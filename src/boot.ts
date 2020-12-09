
import '@nomiclabs/hardhat-ethers';
import { Auctions } from "../typechain/Auctions";
import hre from 'hardhat';
const e = hre.ethers;

let timer: NodeJS.Timer | null = null;

let loop = async(message: string): Promise<void> => {
  console.log(message);
  while(true) {
    console.log("starting loop");
    let AuctionsContract = await e.getContractFactory('Auctions');
    let auctions = AuctionsContract.attach('0x5eA2921A299f28526F17c27b8D5c64803bc27789') as Auctions;
    let shouldStartAuctions = await auctions.shouldStartAuctions();
    if (shouldStartAuctions.deficitAmount > 0 || shouldStartAuctions.surplusAmount > 0) {
      console.log("should start auctions");
    } else {
      console.log("should Not start auctions");
    }

    await new Promise(resolve => {
      timer = setTimeout(resolve, 30 * 60);
      return timer;
    });
  }
}

await loop('Ready fox! I\'m listening');
