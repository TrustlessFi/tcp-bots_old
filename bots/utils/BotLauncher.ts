// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import * as dotenv from 'dotenv'

import { AuctionBidBot } from '../AuctionBid'
import { StartAuctionsBot } from '../StartAuctions'
import { SettleAuctionsBot } from '../SettleAuctions'
import { DiscoverLiquidationsBot } from '../DiscoverLiquidations'
import { ExecuteLiquidationBot } from '../ExecuteLiquidation'
import { UpdateRatesBot } from '../UpdateRates'
import { ArbPricePegBot } from '../ArbPricePeg'

dotenv.config({ path: 'env.list'})

async function main() {
  let botName = process.env.BOT;

  console.log("requested run of bot " + botName);

  if (typeof botName != 'string' || botName.length == 0) {
    console.log('bot name not provided. Provide it as an environment variable called BOT.')
    console.log('example: `docker run --rm --env-file env.list -e BOT=discover_liquidations tcp-bots`')
    return;
  }

  const privateKey = process.env.PRIVATE_KEY

  if (typeof privateKey != 'string' || privateKey.length == 0) {
    console.log('private key not provided. Create a env.list and provide it to the container:');
    console.log('1. Create an env.list with one line: "PRIVATE_KEY=<private key without quote>"');
    console.log('2. Call the docker container with docker `docker run --rm --env-file env.list -e BOT=discover_liquidations tcp-bots`');
    console.log('Note: you can find the bot names by opening bots/utils/BotLauncher.ts');
    console.log('If the botname is correct, then you may need to rebuild the container fist: ');
    console.log('docker build --tag tcp-bots .');
    return;
  }

  switch (botName) {
    case 'auction_bid':
      await (await (new AuctionBidBot({ privateKey })).initialize()).run()
      return;
    case 'start_auctions':
      await (await (new StartAuctionsBot( { privateKey } )).initialize()).run()
      return;
    case 'settle_auctions':
      await (await (new SettleAuctionsBot( { privateKey } )).initialize()).run()
      return;
    case 'discover_liquidations':
      await (await (new DiscoverLiquidationsBot( { privateKey } )).initialize()).run()
      return;
    case 'execute_liquidation':
      await (await (new ExecuteLiquidationBot( { privateKey } )).initialize()).run()
      return;
    case 'update_rates':
      await (await (new UpdateRatesBot( { privateKey } )).initialize()).run()
      return;
    case 'arb_peg_price':
      await (await (new ArbPricePegBot( { privateKey } )).initialize()).run()
      return;
    default:
      console.log(botName + ' bot not found! Add it to bots/utils/BotLauncher.ts and rebuild the docker container.');
      console.log('To rebuild: `docker build --tag tcp-bots .`');
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
