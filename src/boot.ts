
import '@nomiclabs/hardhat-ethers';
import { Auctions } from "../typechain/Auctions";
import hre from 'hardhat';
const e = hre.ethers;
import { BigNumber } from 'ethers';

let timer: NodeJS.Timer | null = null;

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  while(true) {
    console.log("starting loop");
    let AuctionsContract = await e.getContractFactory('Auctions');
    let auctions = AuctionsContract.attach('0x76E49eff4ee5Fa7a5D71F5266BCDDB40eEAf8c4e') as Auctions;
    let shouldStartAuctions = await auctions.shouldStartAuctions();

    let zero = BigNumber.from(0);

    if (shouldStartAuctions.deficitAmount.gt(zero) || shouldStartAuctions.surplusAmount.gt(zero)) {
      console.log("should start auctions");
      await auctions.checkReservesAndStartAuctions();
    } else {
      console.log("should Not start auctions");
    }
    await sleep(100);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
