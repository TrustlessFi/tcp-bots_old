// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';
const e = hre.ethers;
import { Contract } from "ethers";

// ================ CORE CONTRACTS =================
import { Accounting } from "../typechain/Accounting";
import { Auctions } from "../typechain/Auctions";
import { CNP } from "../typechain/CNP";
import { Coin } from "../typechain/Coin";
import { CoinLiquidator } from "../typechain/CoinLiquidator";
import { CoinPositionNFT } from "../typechain/CoinPositionNFT";
import { EnforcedDecentralization } from "../typechain/EnforcedDecentralization";
import { Governor } from "../typechain/Governor";
import { GovernorAlpha } from "../typechain/GovernorAlpha";
import { LendCoin } from "../typechain/LendCoin";
import { Liquidations } from "../typechain/Liquidations";
import { Market } from "../typechain/Market";
import { Prices } from "../typechain/Prices";
import { ProtocolLock } from "../typechain/ProtocolLock";
import { Rates } from "../typechain/Rates";
import { Rewards } from "../typechain/Rewards";
import { Settlement } from "../typechain/Settlement";
import { Timelock } from "../typechain/Timelock";
import { TokenAllocationCreator } from "../typechain/TokenAllocationCreator";

// ================ SUPPORTING CONTRACTS =================
import { TokenAllocation } from "../typechain/TokenAllocation";

// ================ OTHER CONTRACTS =================
import { UniswapV2Pair } from "../typechain/UniswapV2Pair";

export const governorAddress = '0x0bd7f1B2B8479680f837270ec3a6CB3eBc149704';
export const coinLiquidatorAddress = '0xcB9A5A512F732769D623638059F925C1b806Be72';

export type coinProtocol = {
  accounting: Accounting;
  auctions: Auctions;
  cnp: CNP;
  coin: Coin;
  coinNFT: CoinPositionNFT;
  enforcedDecentralization: EnforcedDecentralization;
  governor: Governor;
  governorAlpha: GovernorAlpha;
  lendcoin: LendCoin;
  liquidations: Liquidations;
  market: Market;
  rates: Rates;
  prices: Prices;
  protocolLock: ProtocolLock;
  rewards: Rewards;
  settlement: Settlement;
  timelock: Timelock;
  allocationCreator: TokenAllocationCreator;
  extra: {
    allocations: Array<TokenAllocation>,
    coinLiquidator: CoinLiquidator,
  }; // TODO add in the pairs and tokens
  pairs: {
    coinweth: UniswapV2Pair,
    coinbtc: UniswapV2Pair,
  }
}

export const get = async(name: string, address: string): Promise<Contract> => {
  return (await e.getContractFactory(name)).attach(address) as Contract;
}

export const getProtocol = async(): Promise<coinProtocol> => {
  let governor = await get('Governor', governorAddress) as Governor;
  let coinLiquidator = await get('CoinLiquidator', coinLiquidatorAddress) as CoinLiquidator;

  let accounting = await get('Accounting', await governor.accounting()) as Accounting;
  let auctions = await get('Auctions', await governor.auctions()) as Auctions;
  let cnp = await get('CNP', await governor.cnp()) as CNP;
  let coin = await get('Coin', await governor.coin()) as Coin;
  let coinNFT = await get('CoinPositionNFT', await governor.coinPositionNFT()) as CoinPositionNFT;
  let enforcedDecentralization = await get('EnforcedDecentralization', await governor.enforcedDecentralization()) as EnforcedDecentralization;
  let lendcoin = await get('LendCoin', await governor.lendCoin()) as LendCoin;
  let liquidations = await get('Liquidations', await governor.liquidations()) as Liquidations;
  let market = await get('Market', await governor.market()) as Market;
  let prices = await get('Prices', await governor.prices()) as Prices;
  let protocolLock = await get('ProtocolLock', await governor.protocolLock()) as ProtocolLock;
  let rates = await get('Rates', await governor.rates()) as Rates;
  let rewards = await get('Rewards', await governor.rewards()) as Rewards;
  let settlement = await get('Settlement', await governor.settlement()) as Settlement;
  let timelock = await get('Timelock', await governor.timelock()) as Timelock;
  let governorAlpha = await get('GovernorAlpha', await timelock.admin()) as GovernorAlpha;
  let allocationCreator = await get('TokenAllocationCreator', await governor.allocationCreator()) as TokenAllocationCreator;

  let collateralPairs = await governor.getCollateralPairs();
  let coinweth = await get('UniswapV2Pair', collateralPairs[0]) as UniswapV2Pair
  let coinbtc = await get('UniswapV2Pair', collateralPairs[1]) as UniswapV2Pair

  let allocationAddresses = await allocationCreator.allocations();
  let allocations = [];
  for(let i = 0; i < allocationAddresses.length; i++) {
    allocations.push(await get('TokenAllocation', allocationAddresses[i]) as TokenAllocation);
  }

  return {
    accounting: accounting,
    auctions: auctions,
    cnp: cnp,
    coin: coin,
    coinNFT: coinNFT,
    enforcedDecentralization: enforcedDecentralization,
    governor: governor,
    governorAlpha: governorAlpha,
    lendcoin: lendcoin,
    liquidations: liquidations,
    market: market,
    rates: rates,
    prices: prices,
    protocolLock: protocolLock,
    rewards: rewards,
    settlement: settlement,
    timelock: timelock,
    allocationCreator: allocationCreator,
    extra: {
      allocations: allocations,
      coinLiquidator: coinLiquidator,
    },
    pairs: {
      coinweth: coinweth,
      coinbtc: coinbtc,
    }
  };

}
