
## Build:
docker build --tag coin-protocol-bots .


## Run:
docker run -d coin-protocol-bots npx hardhat run --no-compile --network dockerBot src/boot.ts
