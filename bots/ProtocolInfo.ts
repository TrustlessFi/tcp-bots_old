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
import { UniswapV2Factory } from "../typechain/UniswapV2Factory";
import { UniswapV2Router02 } from "../typechain/UniswapV2Router02";
import { WETH9 } from "../typechain/WETH9";
import { ERC20 } from "../typechain/ERC20";


export type coinProtocol = {
  accounting: Accounting,
  auctions: Auctions,
  cnp: CNP,
  coin: Coin,
  coinNFT: CoinPositionNFT,
  enforcedDecentralization: EnforcedDecentralization,
  governor: Governor,
  governorAlpha: GovernorAlpha,
  lendcoin: LendCoin,
  liquidations: Liquidations,
  market: Market,
  rates: Rates,
  prices: Prices,
  protocolLock: ProtocolLock,
  rewards: Rewards,
  settlement: Settlement,
  timelock: Timelock,
  allocationCreator: TokenAllocationCreator,
  extra: {
    allocations: Array<TokenAllocation>,
    coinLiquidator: CoinLiquidator,
  }; // TODO add in the pairs and tokens
  pairs: {
    coinweth: UniswapV2Pair,
    coinbtc: UniswapV2Pair,
    coinusdc: UniswapV2Pair,
    coinusdt: UniswapV2Pair,
    cointusd: UniswapV2Pair,
  },
  tokens: {
    weth: WETH9,
    btc: ERC20,
    usdc: ERC20,
    usdt: ERC20,
    tusd: ERC20,
  },
}

// This is the complete list of contracts we need to find the entire protocol and related contracts.
export const governorAddress = '0x0bd7f1B2B8479680f837270ec3a6CB3eBc149704';
export const coinLiquidatorAddress = '0xcB9A5A512F732769D623638059F925C1b806Be72';
export const uniswapRouterAddresss = '0x3d0EeC511E8e65a053e0958e774375cD0A57cCfa';
export const btcAddress = '0x5930a362f5f107e2E0628Ca9D2371a4fAcF31BFA'
export const usdcAddress = '0xE74b281b820c039c215feFF841127216925663EB'
export const usdtAddress = '0x2A614418E99F102bE2F9e8Ca79C0C97eb262E15c'
export const tusdAddress = '0x520E98D0987a912699a70C503c66cF9886E8C2Da'

export const get = async(name: string, address: string): Promise<Contract> =>
  (await e.getContractFactory(name)).attach(address) as Contract;

export const getProtocol = async(): Promise<coinProtocol> => {
  // Get the root contracts above
  let governor = await get('Governor', governorAddress) as Governor;
  let coinLiquidator = await get('CoinLiquidator', coinLiquidatorAddress) as CoinLiquidator;
  let router = await get('UniswapV2Router02', uniswapRouterAddresss) as UniswapV2Router02;
  let weth = await get('WETH9', await router.WETH()) as WETH9;
  let factory = await get('UniswapV2Factory', await router.factory()) as UniswapV2Factory;
  let btc = await get('contracts/library/ERC20.sol:ERC20', btcAddress) as ERC20;
  let usdc = await get('contracts/library/ERC20.sol:ERC20', usdcAddress) as ERC20;
  let usdt = await get('contracts/library/ERC20.sol:ERC20', usdtAddress) as ERC20;
  let tusd = await get('contracts/library/ERC20.sol:ERC20', tusdAddress) as ERC20;

  // get the rest of the contract from them.
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

  let allocationAddresses = await allocationCreator.allocations();
  let allocations = [];
  for(let i = 0; i < allocationAddresses.length; i++) {
    allocations.push(await get('TokenAllocation', allocationAddresses[i]) as TokenAllocation);
  }

  const getPair = async(token: ERC20): Promise<UniswapV2Pair> => {
    let pairAddress = await factory.getPair(coin.address, token.address)
    return (await e.getContractFactory('UniswapV2Pair')).attach(pairAddress) as UniswapV2Pair;
  }

  let coinweth = await getPair(weth as unknown as ERC20)
  let coinbtc = await getPair(btc);
  let coinusdc = await getPair(usdc);
  let coinusdt = await getPair(usdt);
  let cointusd = await getPair(tusd);


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
    tokens: {
      weth: weth,
      btc: btc,
      usdc: usdc,
      usdt: usdt,
      tusd: tusd,
    },
    pairs: {
      coinweth: coinweth,
      coinbtc: coinbtc,
      coinusdc: coinusdc,
      coinusdt: coinusdt,
      cointusd: cointusd,
    },
  };

}
