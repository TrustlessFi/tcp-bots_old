// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';
const e = hre.ethers;
import { Contract } from "ethers";

import { seedAddresses } from "./Addresses";

// ================ CORE CONTRACTS =================
import { Accounting } from "../../typechain/Accounting";
import { Auctions } from "../../typechain/Auctions";
import { Zhu } from "../../typechain/Zhu";
import { ZhuPositionNft } from "../../typechain/ZhuPositionNFT";
import { EnforcedDecentralization } from "../../typechain/EnforcedDecentralization";
import { Governor } from "../../typechain/Governor";
import { TcpGovernorAlpha } from "../../typechain/TCPGovernorAlpha";
import { Lend } from "../../typechain/Lend";
import { LendZhu } from "../../typechain/LendZhu";
import { Liquidations } from "../../typechain/Liquidations";
import { Market } from "../../typechain/Market";
import { Prices } from "../../typechain/Prices";
import { ProtocolLock } from "../../typechain/ProtocolLock";
import { Rates } from "../../typechain/Rates";
import { Rewards } from "../../typechain/Rewards";
import { Settlement } from "../../typechain/Settlement";
import { TcpTimelock } from "../../typechain/TcpTimelock";
import { TfTimelock } from "../../typechain/TfTimelock";
import { Tf } from "../../typechain/Tf";
import { Tcp } from "../../typechain/Tcp";

// ================ OTHER CONTRACTS =================
import { Weth9 } from "../../typechain/WETH9";
import { Erc20 } from "../../typechain/ERC20";

// ================ META =================
import { TfGovernorAlpha } from "../../typechain/TFGovernorAlpha";
import { TfDao } from "../../typechain/TFDao";
import { TfPositionNft } from "../../typechain/TFPositionNFT";

// ================ UNISWAP =================
import { SwapRouter } from "../../typechain/SwapRouter";
import { UniswapV3Factory } from "../../typechain/UniswapV3Factory";
import { NonfungiblePositionManager } from "../../typechain/NonfungiblePositionManager";
import { UniswapV3Pool } from "../../typechain/UniswapV3Pool";

export type deployedTCP = {
  accounting: Accounting
  auctions: Auctions
  tcp: Tcp
  zhu: Zhu
  zhuNFT: ZhuPositionNft
  enforcedDecentralization: EnforcedDecentralization
  governor: Governor
  tcpGovernorAlpha: TcpGovernorAlpha
  lend: Lend
  lendzhu: LendZhu
  liquidations: Liquidations
  market: Market
  rates: Rates
  prices: Prices
  protocolLock: ProtocolLock
  rewards: Rewards
  settlement: Settlement
  timelock: TcpTimelock
  meta: {
    tf: Tf
    tfDao: TfDao
    tfPositionNFT: TfPositionNft
    tfGovernorAlpha: TfGovernorAlpha
    tfTimelock: TfTimelock
  },
  pools: {
    tcpeth: UniswapV3Pool
    zhueth: UniswapV3Pool
    reference: UniswapV3Pool[]
  },
  external: {
    tokens: { [key in string]: Erc20 }
    weth: Weth9
    router: SwapRouter
    factory: UniswapV3Factory
    nftPositionManager: NonfungiblePositionManager
  },
  multisig: string,
}

export const getDeployedProtocol = async(addresses: seedAddresses): Promise<deployedTCP> => {
  const get = async(name: string, address: string) => (await e.getContractFactory(name)).attach(address)

  let [
    tcpGovernorAlpha,
    tfGovernorAlpha,
    nftPositionManager,
    swapRouter,
  ] = await Promise.all([
    await get('TCPGovernorAlpha', addresses.tcpGovernorAlpha) as unknown as TcpGovernorAlpha,
    await get('TFGovernorAlpha', addresses.tfGovernorAlpha) as unknown as TfGovernorAlpha,
    await get('NonfungiblePositionManager', addresses.nftPositionManager) as unknown as NonfungiblePositionManager,
    await get('SwapRouter', addresses.swapRouter) as unknown as SwapRouter,
  ]);

  let [
    tfDao,
    governor,
    weth,
    factory,
  ] = await Promise.all([
    await get('TFDao', await tfGovernorAlpha.tfDao()) as unknown as TfDao,
    await get('Governor', await tcpGovernorAlpha.governor()) as unknown as Governor,
    await get('WETH9', await nftPositionManager.WETH9()) as unknown as Weth9,
    await get('UniswapV3Factory', await nftPositionManager.factory()) as unknown as UniswapV3Factory,
  ]);

  let [
    tfToken,
    tfPositionNFT,
    tfTimelock,
  ] = await Promise.all([
    await get('Tf', await tfDao.tfToken()) as unknown as Tf,
    await get('TFPositionNFT', await tfDao.tfPositionNFT()) as unknown as TfPositionNft,
    await get('TfTimelock', await tfDao.timelock()) as unknown as TfTimelock,
  ]);

  let [
    accounting,
    auctions,
    tcp,
    zhu,
    zhuNFT,
    enforcedDecentralization,
    lend,
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
    await get('Accounting', await governor.accounting()) as unknown as Accounting,
    await get('Auctions', await governor.auctions()) as unknown as Auctions,
    await get('Tcp', await governor.tcp()) as unknown as Tcp,
    await get('Zhu', await governor.zhu()) as unknown as Zhu,
    await get('ZhuPositionNFT', await governor.zhuPositionNFT()) as unknown as ZhuPositionNft,
    await get('EnforcedDecentralization', await governor.enforcedDecentralization()) as unknown as EnforcedDecentralization,
    await get('Lend', await governor.lend()) as unknown as Lend,
    await get('LendZhu', await governor.lendZhu()) as unknown as LendZhu,
    await get('Liquidations', await governor.liquidations()) as unknown as Liquidations,
    await get('Market', await governor.market()) as unknown as Market,
    await get('Prices', await governor.prices()) as unknown as Prices,
    await get('ProtocolLock', await governor.protocolLock()) as unknown as ProtocolLock,
    await get('Rates', await governor.rates()) as unknown as Rates,
    await get('Rewards', await governor.rewards()) as unknown as Rewards,
    await get('Settlement', await governor.settlement()) as unknown as Settlement,
    await get('TcpTimelock', await governor.timelock()) as unknown as TcpTimelock,
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

  const wrapPool = (address: string): UniswapV3Pool => UniswapV3PoolFactory.attach(address) as unknown as UniswapV3Pool

  let protocolPool = wrapPool(protocolPoolAddress);
  let collateralPool = wrapPool(collateralPoolAddress);
  let referencePools = referencePoolAddresses.map((address) => wrapPool(address));

  let referenceTokens: { [key in string]: Erc20 } = {}
  await Promise.all(referencePools.map(async (pool) => {
    let [ token0, token1 ] = await Promise.all([ await pool.token0(), await pool.token1() ]);
    let otherTokenAddress = token0 == tcp.address || token0 == zhu.address ? token1 : token0
    let token = ERC20Factory.attach(otherTokenAddress) as unknown as Erc20
    referenceTokens[await token.name()] = token
  }))

  return {
    accounting: accounting as Accounting,
    auctions: auctions as Auctions,
    tcp: tcp as Tcp,
    zhu: zhu as Zhu,
    zhuNFT: zhuNFT as ZhuPositionNft,
    enforcedDecentralization: enforcedDecentralization as EnforcedDecentralization,
    governor: governor,
    tcpGovernorAlpha: tcpGovernorAlpha,
    lend: lend as Lend,
    lendzhu: lendzhu as LendZhu,
    liquidations: liquidations as Liquidations,
    market: market as Market,
    rates: rates as Rates,
    prices: prices as Prices,
    protocolLock: protocolLock as ProtocolLock,
    rewards: rewards as Rewards,
    settlement: settlement as Settlement,
    timelock: timelock as TcpTimelock,
    meta: {
      tf: tfToken,
      tfDao: tfDao,
      tfPositionNFT: tfPositionNFT,
      tfGovernorAlpha: tfGovernorAlpha,
      tfTimelock: tfTimelock,
    },
    pools: {
      tcpeth: protocolPool,
      zhueth: collateralPool,
      reference: referencePools,
    },
    external: {
      tokens: referenceTokens,
      weth: weth,
      router: swapRouter,
      factory: factory,
      nftPositionManager: nftPositionManager,
    },
    multisig: addresses.multisig,
  }
}
