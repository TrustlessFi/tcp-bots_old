// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';
const e = hre.ethers;

import {
  getSeedAddresses,
  seedAddressesType,
  getExternalAddresses,
  externalAddressesType,
  getDeployerAddress,
} from "./Addresses";

// ================ CORE CONTRACTS =================
import { Accounting } from "../../typechain/Accounting";
import { Auctions } from "../../typechain/Auctions";
import { Hue } from "../../typechain/Hue";
import { HuePositionNFT } from "../../typechain/HuePositionNFT";
import { EnforcedDecentralization } from "../../typechain/EnforcedDecentralization";
import { Governor } from "../../typechain/Governor";
import { TCPGovernorAlpha } from "../../typechain/TCPGovernorAlpha";
import { Lend } from "../../typechain/Lend";
import { LendHue } from "../../typechain/LendHue";
import { Liquidations } from "../../typechain/Liquidations";
import { Market } from "../../typechain/Market";
import { Prices } from "../../typechain/Prices";
import { ProtocolLock } from "../../typechain/ProtocolLock";
import { Rates } from "../../typechain/Rates";
import { Rewards } from "../../typechain/Rewards";
import { Settlement } from "../../typechain/Settlement";
import { TcpTimelock } from "../../typechain/TcpTimelock";
import { TDaoTimelock } from "../../typechain/TDaoTimelock";
import { TDaoToken } from "../../typechain/TDaoToken";
import { Tcp } from "../../typechain/Tcp";

// ================ OTHER CONTRACTS =================
import { WETH9 } from "../../typechain/WETH9";
import { ERC20 } from "../../typechain/ERC20";

// ================ META =================
import { TDaoGovernorAlpha } from "../../typechain/TDaoGovernorAlpha";
import { TDao } from "../../typechain/TDao";
import { TDaoPositionNFT } from "../../typechain/TDaoPositionNFT";

// ================ UNISWAP =================
import { SwapRouter } from "../../typechain/SwapRouter";
import { UniswapV3Factory } from "../../typechain/UniswapV3Factory";
import { NonfungiblePositionManager } from "../../typechain/NonfungiblePositionManager";
import { UniswapV3Pool } from "../../typechain/UniswapV3Pool";

export type deployedTCP = {
  accounting: Accounting
  auctions: Auctions
  tcp: Tcp
  hue: Hue
  hueNFT: HuePositionNFT
  enforcedDecentralization: EnforcedDecentralization
  governor: Governor
  tcpGovernorAlpha: TCPGovernorAlpha
  lend: Lend
  lendhue: LendHue
  liquidations: Liquidations
  market: Market
  rates: Rates
  prices: Prices
  protocolLock: ProtocolLock
  rewards: Rewards
  settlement: Settlement
  tcpTimelock: TcpTimelock
  meta: {
    tDao: TDao
    tDaoToken: TDaoToken
    tDaoPositionNFT: TDaoPositionNFT
    tDaoGovernorAlpha: TDaoGovernorAlpha
    tDaoTimelock: TDaoTimelock
  },
  pools: {
    tcpeth: UniswapV3Pool
    hueeth: UniswapV3Pool
    reference: UniswapV3Pool[]
  },
  external: {
    tokens: { [key in string]: ERC20 }
    weth: WETH9
    router: SwapRouter
    factory: UniswapV3Factory
    nftPositionManager: NonfungiblePositionManager
  },
  multisig: string,
  deployerAddress: string,
}

export const getDeployedProtocol = async(
  externalAddresses: null | externalAddressesType = null,
  seedAddresses: null | seedAddressesType = null,
  deployerAddress: null | string = null,
): Promise<deployedTCP> => {
  if (externalAddresses === null) externalAddresses = getExternalAddresses()
  if (seedAddresses === null) seedAddresses = getSeedAddresses()
  if (deployerAddress === null) deployerAddress = getDeployerAddress()

  const get = async(name: string, address: string) => (await e.getContractFactory(name)).attach(address)

  let [
    tcpGovernorAlpha,
    tDaoGovernorAlpha,
    nftPositionManager,
    swapRouter,
  ] = await Promise.all([
    await get('TCPGovernorAlpha', seedAddresses.tcpGovernorAlpha) as unknown as TCPGovernorAlpha,
    await get('TDaoGovernorAlpha', seedAddresses.tDaoGovernorAlpha) as unknown as TDaoGovernorAlpha,
    await get('NonfungiblePositionManager', externalAddresses.positionManager) as unknown as NonfungiblePositionManager,
    await get('SwapRouter', externalAddresses.router) as unknown as SwapRouter,
  ]);

  let [
    tDao,
    governor,
    weth,
    factory,
  ] = await Promise.all([
    await get('TDao', await tDaoGovernorAlpha.tDao()) as unknown as TDao,
    await get('Governor', await tcpGovernorAlpha.governor()) as unknown as Governor,
    await get('WETH9', await nftPositionManager.WETH9()) as unknown as WETH9,
    await get('UniswapV3Factory', await nftPositionManager.factory()) as unknown as UniswapV3Factory,
  ]);

  let [
    tDaoToken,
    tDaoPositionNFT,
    tDaoTimelock,
  ] = await Promise.all([
    await get('TDaoToken', await tDao.tDaoToken()) as unknown as TDaoToken,
    await get('TDaoPositionNFT', await tDao.tDaoPositionNFT()) as unknown as TDaoPositionNFT,
    await get('TDaoTimelock', await tDao.timelock()) as unknown as TDaoTimelock,
  ]);

  let [
    accounting,
    auctions,
    tcp,
    hue,
    hueNFT,
    enforcedDecentralization,
    lend,
    lendhue,
    liquidations,
    market,
    prices,
    protocolLock,
    rates,
    rewards,
    settlement,
    tcpTimelock,
  ] = await Promise.all([
    await get('Accounting', await governor.accounting()) as unknown as Accounting,
    await get('Auctions', await governor.auctions()) as unknown as Auctions,
    await get('Tcp', await governor.tcp()) as unknown as Tcp,
    await get('Hue', await governor.hue()) as unknown as Hue,
    await get('HuePositionNFT', await governor.huePositionNFT()) as unknown as HuePositionNFT,
    await get('EnforcedDecentralization', await governor.enforcedDecentralization()) as unknown as EnforcedDecentralization,
    await get('Lend', await governor.lend()) as unknown as Lend,
    await get('LendHue', await governor.lendHue()) as unknown as LendHue,
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

  let referenceTokens: { [key in string]: ERC20 } = {}
  await Promise.all(referencePools.map(async (pool) => {
    let [ token0, token1 ] = await Promise.all([ await pool.token0(), await pool.token1() ]);
    let otherTokenAddress = token0 == tcp.address || token0 == hue.address ? token1 : token0
    let token = ERC20Factory.attach(otherTokenAddress) as unknown as ERC20
    referenceTokens[await token.name()] = token
  }))

  return {
    accounting: accounting as Accounting,
    auctions: auctions as Auctions,
    tcp: tcp as Tcp,
    hue: hue as Hue,
    hueNFT: hueNFT as HuePositionNFT,
    enforcedDecentralization: enforcedDecentralization as EnforcedDecentralization,
    governor: governor,
    tcpGovernorAlpha: tcpGovernorAlpha,
    lend: lend as Lend,
    lendhue: lendhue as LendHue,
    liquidations: liquidations as Liquidations,
    market: market as Market,
    rates: rates as Rates,
    prices: prices as Prices,
    protocolLock: protocolLock as ProtocolLock,
    rewards: rewards as Rewards,
    settlement: settlement as Settlement,
    tcpTimelock: tcpTimelock as TcpTimelock,
    meta: {
      tDao,
      tDaoToken,
      tDaoPositionNFT,
      tDaoGovernorAlpha,
      tDaoTimelock,
    },
    pools: {
      tcpeth: protocolPool,
      hueeth: collateralPool,
      reference: referencePools,
    },
    external: {
      tokens: referenceTokens,
      weth: weth,
      router: swapRouter,
      factory: factory,
      nftPositionManager: nftPositionManager,
    },
    multisig: externalAddresses.multisig,
    deployerAddress: deployerAddress,
  }
}
