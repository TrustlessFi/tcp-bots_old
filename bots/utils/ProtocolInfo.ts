// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';
const e = hre.ethers;

import {
  getSeedAddresses,
  seedAddressesType,
  getExternalAddresses,
  externalAddressesType,
} from "./Addresses";

// ================ CORE CONTRACTS =================
import {
  Auctions,
  Hue,
  HuePositionNFT,
  EnforcedDecentralization,
  Governor,
  TcpGovernorAlpha,
  LendHue,
  Liquidations,
  Market,
  Prices,
  ProtocolLock,
  Rates,
  Rewards,
  Settlement,
  TcpTimelock,
  Tcp,
  Accounting,
  ProtocolDataAggregator,
} from "../../typechain/";

// ================ OTHER CONTRACTS =================
import { WETH9 } from "../../typechain/";

// ================ UNISWAP =================
import {
  SwapRouter,
  UniswapV3Factory,
  NonfungiblePositionManager,
  UniswapV3Pool,
} from "../../typechain/";

export type deployedTcp = {
  accounting: Accounting
  auctions: Auctions
  tcp: Tcp
  hue: Hue
  hueNFT: HuePositionNFT
  enforcedDecentralization: EnforcedDecentralization
  governor: Governor
  tcpGovernorAlpha: TcpGovernorAlpha
  lendhue: LendHue
  liquidations: Liquidations
  market: Market
  rates: Rates
  prices: Prices
  protocolLock: ProtocolLock
  rewards: Rewards
  settlement: Settlement
  tcpTimelock: TcpTimelock
  protocolDataAggregator: ProtocolDataAggregator
  pools: {
    huetcp: UniswapV3Pool
    hueeth: UniswapV3Pool
    reference: UniswapV3Pool[]
  },
  external: {
    weth: WETH9
    router: SwapRouter
    factory: UniswapV3Factory
    nftPositionManager: NonfungiblePositionManager
  },
}

export const getDeployedProtocol = async(
  externalAddresses: null | externalAddressesType = null,
  seedAddresses: null | seedAddressesType = null,
): Promise<deployedTcp> => {
  if (externalAddresses === null) externalAddresses = getExternalAddresses()
  if (seedAddresses === null) seedAddresses = getSeedAddresses()

  const get = async(name: string, address: string) => (await e.getContractFactory(name)).attach(address)

  let [
    tcpGovernorAlpha,
    protocolDataAggregator,
    nftPositionManager,
    swapRouter,
  ] = await Promise.all([
    await get('TcpGovernorAlpha', seedAddresses.tcpGovernorAlpha) as unknown as TcpGovernorAlpha,
    await get('ProtocolDataAggregator', seedAddresses.protocolDataAggregator) as unknown as ProtocolDataAggregator,
    await get('NonfungiblePositionManager', externalAddresses.positionManager) as unknown as NonfungiblePositionManager,
    await get('SwapRouter', externalAddresses.router) as unknown as SwapRouter,
  ]);

  let [
    governor,
    weth,
    factory,
  ] = await Promise.all([
    await get('Governor', await tcpGovernorAlpha.governor()) as unknown as Governor,
    await get('WETH9', await nftPositionManager.WETH9()) as unknown as WETH9,
    await get('UniswapV3Factory', await nftPositionManager.factory()) as unknown as UniswapV3Factory,
  ]);

  let [
    accounting,
    auctions,
    tcp,
    hue,
    hueNFT,
    enforcedDecentralization,
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
    collateralPoolAddress,
    protocolPoolAddress,
    referencePoolAddresses,
    UniswapV3PoolFactory,
  ] = await Promise.all([
    await (prices as Prices).collateralPool(),
    await (prices as Prices).protocolPool(),
    await (rates as Rates).getReferencePools(),
    await e.getContractFactory('UniswapV3Pool'),
  ]);

  const wrapPool = (address: string): UniswapV3Pool => UniswapV3PoolFactory.attach(address) as unknown as UniswapV3Pool

  let protocolPool = wrapPool(protocolPoolAddress)
  let collateralPool = wrapPool(collateralPoolAddress)
  let referencePools = referencePoolAddresses.map((address) => wrapPool(address))

  return {
    accounting: accounting as Accounting,
    auctions: auctions as Auctions,
    tcp: tcp as Tcp,
    hue: hue as Hue,
    hueNFT: hueNFT as HuePositionNFT,
    enforcedDecentralization: enforcedDecentralization as EnforcedDecentralization,
    governor: governor,
    tcpGovernorAlpha: tcpGovernorAlpha,
    lendhue: lendhue as LendHue,
    liquidations: liquidations as Liquidations,
    market: market as Market,
    rates: rates as Rates,
    prices: prices as Prices,
    protocolLock: protocolLock as ProtocolLock,
    rewards: rewards as Rewards,
    settlement: settlement as Settlement,
    tcpTimelock: tcpTimelock as TcpTimelock,
    protocolDataAggregator: protocolDataAggregator as ProtocolDataAggregator,
    pools: {
      hueeth: collateralPool,
      huetcp: protocolPool,
      reference: referencePools,
    },
    external: {
      weth: weth,
      router: swapRouter,
      factory: factory,
      nftPositionManager: nftPositionManager,
    },
  }
}
