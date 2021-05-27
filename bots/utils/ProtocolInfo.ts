// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';
const e = hre.ethers;
import { Contract } from "ethers";

import { getSeedAddresses, seedAddresses } from "./Addresses";

// ================ CORE CONTRACTS =================
import { Accounting } from "../../typechain/Accounting";
import { Auctions } from "../../typechain/Auctions";
import { ProtocolToken } from "../../typechain/ProtocolToken";
import { Zhu } from "../../typechain/Zhu";
import { ZhuPositionNFT } from "../../typechain/ZhuPositionNFT";
import { EnforcedDecentralization } from "../../typechain/EnforcedDecentralization";
import { Governor } from "../../typechain/Governor";
import { TCPGovernorAlpha } from "../../typechain/TCPGovernorAlpha";
import { LendZhu } from "../../typechain/LendZhu";
import { Liquidations } from "../../typechain/Liquidations";
import { Market } from "../../typechain/Market";
import { Prices } from "../../typechain/Prices";
import { ProtocolLock } from "../../typechain/ProtocolLock";
import { Rates } from "../../typechain/Rates";
import { Rewards } from "../../typechain/Rewards";
import { Settlement } from "../../typechain/Settlement";
import { Timelock } from "../../typechain/Timelock";

// ================ OTHER CONTRACTS =================
import { WETH9 } from "../../typechain/WETH9";
import { ERC20 } from "../../typechain/ERC20";

// ================ META =================
import { TFGovernorAlpha } from "../../typechain/TFGovernorAlpha";
import { TFDao } from "../../typechain/TFDao";
import { TFPositionNFT } from "../../typechain/TFPositionNFT";

// ================ UNISWAP =================
import { SwapRouter } from "../../typechain/SwapRouter";
import { UniswapV3Factory } from "../../typechain/UniswapV3Factory";
import { NonfungiblePositionManager } from "../../typechain/NonfungiblePositionManager";
import { UniswapV3Pool } from "../../typechain/UniswapV3Pool";

export type deployedCoinProtocol = {
  accounting: Accounting;
  auctions: Auctions;
  tcp: ProtocolToken;
  zhu: Zhu;
  zhuNFT: ZhuPositionNFT;
  enforcedDecentralization: EnforcedDecentralization;
  governor: Governor;
  tcpGovernorAlpha: TCPGovernorAlpha;
  lendzhu: LendZhu;
  liquidations: Liquidations;
  market: Market;
  rates: Rates;
  prices: Prices;
  protocolLock: ProtocolLock;
  rewards: Rewards;
  settlement: Settlement;
  timelock: Timelock;
  meta: {
    tf: ProtocolToken;
    tfDao: TFDao;
    tfPositionNFT: TFPositionNFT;
    tfGovernorAlpha: TFGovernorAlpha;
    tfTimelock: Timelock;
  },
  tokens: { [key in string]: ERC20 },
  pools: {
    tcpeth: UniswapV3Pool,
    zhueth: UniswapV3Pool,
    reference: UniswapV3Pool[],
  },
  uniswap: {
    weth: WETH9,
    router: SwapRouter,
    factory: UniswapV3Factory,
    nftPositionManager: NonfungiblePositionManager,
  }
}

export const getProtocol = async(addresses: seedAddresses): Promise<deployedCoinProtocol> => {
  const get = async(name: string, address: string): Promise<Contract> =>
    (await e.getContractFactory(name)).attach(address) as Contract;

  let [
    tcpGovernorAlpha,
    tfGovernorAlpha,
    nftPositionManager,
    swapRouter,
  ] = await Promise.all([
    await get('TCPGovernorAlpha', addresses.tcpGovernorAlpha) as TCPGovernorAlpha,
    await get('TFGovernorAlpha', addresses.tfGovernorAlpha) as TFGovernorAlpha,
    await get('NonfungiblePositionManager', addresses.nftPositionManager) as NonfungiblePositionManager,
    await get('SwapRouter', addresses.swapRouter) as SwapRouter,
  ]);

  let [
    tfDao,
    governor,
    weth,
    factory,
  ] = await Promise.all([
    await get('TFDao', await tfGovernorAlpha.tfDao()) as TFDao,
    await get('Governor', await tcpGovernorAlpha.governor()) as Governor,
    await get('WETH9', await nftPositionManager.WETH9()) as WETH9,
    await get('UniswapV3Factory', await nftPositionManager.factory()) as UniswapV3Factory,
  ]);

  let [
    tfToken,
    tfPositionNFT,
    tfTimelock,
  ] = await Promise.all([
    await get('ProtocolToken', await tfDao.tfToken()) as ProtocolToken,
    await get('TFPositionNFT', await tfDao.tfPositionNFT()) as TFPositionNFT,
    await get('Timelock', await tfDao.timelock()) as Timelock,
  ]);

  let [
    accounting,
    auctions,
    tcp,
    zhu,
    zhuNFT,
    enforcedDecentralization,
    lendzhu,
    liquidations,
    market,
    prices,
    protocolLock,
    rates,
    rewards,
    settlement,
    timelock,
  ] = await Promise.all([
    await get('Accounting', await governor.accounting()) as Accounting,
    await get('Auctions', await governor.auctions()) as Auctions,
    await get('ProtocolToken', await governor.tcp()) as ProtocolToken,
    await get('Zhu', await governor.zhu()) as Zhu,
    await get('ZhuPositionNFT', await governor.zhuPositionNFT()) as ZhuPositionNFT,
    await get('EnforcedDecentralization', await governor.enforcedDecentralization()) as EnforcedDecentralization,
    await get('LendZhu', await governor.lendZhu()) as LendZhu,
    await get('Liquidations', await governor.liquidations()) as Liquidations,
    await get('Market', await governor.market()) as Market,
    await get('Prices', await governor.prices()) as Prices,
    await get('ProtocolLock', await governor.protocolLock()) as ProtocolLock,
    await get('Rates', await governor.rates()) as Rates,
    await get('Rewards', await governor.rewards()) as Rewards,
    await get('Settlement', await governor.settlement()) as Settlement,
    await get('Timelock', await governor.timelock()) as Timelock,
  ]);

  let [
    protocolPoolAddress,
    collateralPoolAddress,
    referencePoolAddresses,
    UniswapV3PoolFactory,
    ERC20Factory,
  ] = await Promise.all([
    await governor.protocolPool(),
    await governor.collateralPool(),
    await governor.getReferencePools(),
    await e.getContractFactory('UniswapV3Pool'),
    await e.getContractFactory('ERC20'),
  ]);

  const wrapPool = (address: string): UniswapV3Pool => UniswapV3PoolFactory.attach(address) as UniswapV3Pool

  let protocolPool = wrapPool(protocolPoolAddress);
  let collateralPool = wrapPool(collateralPoolAddress);
  let referencePools = referencePoolAddresses.map((address) => wrapPool(address));

  let referenceTokens: { [key in string]: ERC20 } = {}
  await Promise.all(referencePools.map(async (pool) => {
    let [ token0, token1 ] = await Promise.all([ await pool.token0(), await pool.token1() ]);
    let otherTokenAddress = token0 == tcp.address || token0 == zhu.address ? token1 : token0
    let token = ERC20Factory.attach(otherTokenAddress) as ERC20
    referenceTokens[await token.name()] = token
  }))

  return {
    accounting: accounting as Accounting,
    auctions: auctions as Auctions,
    tcp: tcp as ProtocolToken,
    zhu: zhu as Zhu,
    zhuNFT: zhuNFT as ZhuPositionNFT,
    enforcedDecentralization: enforcedDecentralization as EnforcedDecentralization,
    governor: governor,
    tcpGovernorAlpha: tcpGovernorAlpha,
    lendzhu: lendzhu as LendZhu,
    liquidations: liquidations as Liquidations,
    market: market as Market,
    rates: rates as Rates,
    prices: prices as Prices,
    protocolLock: protocolLock as ProtocolLock,
    rewards: rewards as Rewards,
    settlement: settlement as Settlement,
    timelock: timelock as Timelock,
    meta: {
      tf: tfToken,
      tfDao: tfDao,
      tfPositionNFT: tfPositionNFT,
      tfGovernorAlpha: tfGovernorAlpha,
      tfTimelock: tfTimelock,
    },
    tokens: referenceTokens,
    pools: {
      tcpeth: protocolPool,
      zhueth: collateralPool,
      reference: referencePools,
    },
    uniswap: {
      weth: weth,
      router: swapRouter,
      factory: factory,
      nftPositionManager: nftPositionManager,
    }
  }
}
