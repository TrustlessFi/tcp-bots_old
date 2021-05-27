

- env.list is automatically pulled in at the top of BotLauncher.ts in order to define the private key of the address running the bot
- env.list should have the format PRIVATE_KEY=<private key> Any additional environment variables can be set on a new line
- yarn run test_bot runs on localhost, which assumes that the protocol is deployed at http://127.0.0.1:8545/

## Test locally:

BOT=<BOT_NAME> yarn run test_bot
BOT=start_auctions yarn run test_bot

## Build:
docker build --tag coin-protocol-bots .

## Run:
docker run --rm --env BOT=start_auctions coin-protocol-bots
