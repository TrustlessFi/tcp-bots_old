// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED


import { StartAuctionsBot } from '../StartAuctions'
import { SettleAuctionsBot } from '../SettleAuctions'
import { DiscoverLiquidationsBot } from '../DiscoverLiquidations'

async function main() {
  let botName = process.env.BOT;

  console.log("requested run of " + botName);

  if (typeof botName != 'string' || botName.length == 0) {
    console.log('bot name not provided. Provide it as an environment variable called BOT.');
    return;
  }

  let privateKey = process.env.PRIVATE_KEY;

  if (typeof privateKey != 'string' || privateKey.length == 0) {
    console.log('private key not provided. Create a env.list and provide it to the container:');
    console.log('1. Create an env.list with one line: "PRIVATE_KEY=<private key without quote>"');
    console.log('2. Call the docker container with docker run --rm --env-file env.list coin-protocol-bots <bot name>');
    console.log('Note: you can find the bot names by opening bots/utils/BotLauncher.ts');
    console.log('If the botname is correct, then you may need to rebuild the container fist: ');
    console.log('docker build --tag coin-protocol-bots .');
    return;
  }

  switch (botName) {
    case 'start_auctions':
      await (new StartAuctionsBot(privateKey)).run();
    case 'settle_auctions':
      await (new SettleAuctionsBot(privateKey)).run();
    case 'discover_liquidations':
      await (new DiscoverLiquidationsBot(privateKey)).run();
    default:
      console.log(botName + ' bot not found! Add it to bots/utils/BotLauncher.ts and rebuild the docker container.');
      console.log('To rebuild: `docker build --tag coin-protocol-bots .`');
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
