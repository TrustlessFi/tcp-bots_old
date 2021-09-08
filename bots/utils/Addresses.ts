// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';

export type seedAddressesType = {
  tcpGovernorAlpha: string,
  protocolDataAggregator: string,
}

export enum Network {
  mainnet = 'mainnet',
  rinkeby = 'rinkeby',
  hardhat = 'hardhat',
  dockerBot = 'dockerBot',
  localhost = 'localhost',
  localDeployment = 'localDeployment',
}


const isNetwork = (s: string): s is Network => s in Network

export const getCurrentNetwork = () => {
  const networkName = hre.network.name
  if (isNetwork(networkName)) return Network[networkName]
  else throw 'Unknown network: ' + networkName
}

export const isTestNetwork = () => {
  switch (getCurrentNetwork()) {
    case Network.mainnet:
    case Network.rinkeby:
      return false
    case Network.hardhat:
    case Network.dockerBot:
    case Network.localhost:
    case Network.localDeployment:
      return true
  }
}

export const getSeedAddresses = (): seedAddressesType => {
  const network = getCurrentNetwork()

  switch (network) {
    case Network.mainnet:
    case Network.rinkeby:
      return {
        tcpGovernorAlpha: '0x974fc7052Fa0faf573b6fC1c0FacC0ED0A69c075',
        protocolDataAggregator: 'ADD_ADDRESS',
      }
    case Network.hardhat:
    case Network.dockerBot:
    case Network.localhost:
    case Network.localDeployment:
      return {
        tcpGovernorAlpha: '0x940392f0F9053e33eFDa21f31108F3A6d3c3191C',
        protocolDataAggregator: '0x4B41f098a2e2d2d88aeC6112583A4C119B07e5f1',
      }
  }
}

export type externalAddressesType = {
  usdc: string,
  usdt: string,
  tusd?: string,

  ethUsdcPool: string,
  ethUsdtPool: string,

  positionManager: string,
  factory: string,
  router: string,

  ethAggregator: string,
}

export const getExternalAddresses = (): externalAddressesType => {
  const network = getCurrentNetwork()

  let usdc: string
  let usdt: string

  let ethUsdcPool: string
  let ethUsdtPool: string

  let ethAggregator: string

  switch (network) {
    case Network.hardhat:
    case Network.dockerBot:
    case Network.localhost:
    case Network.localDeployment:
      return {
        usdc: '0x153900C946e33AED5F1ee79C92E149A262E2B1E9',
        usdt: '0x30B1050647C6b916741be1B2a7844A603931C4D9',

        ethUsdcPool: '0x4b2496646840567f5c81C2b943815f15337855b8',
        ethUsdtPool: '0x3866A5055fac77a5FEfef2067150C655Eb25364A',

        factory: '0x10BFF065F1e70f782108005E9B4917C536F7FF51',
        router: '0xe0ad47d12Dd44E601eb7Cd07F574a8643B351A96',
        positionManager: '0xfE0cae103cB3aA14eF7fbf1Cee4B3EDeC7301D5B',

        ethAggregator: '0x42Bb2c13D0Bb67B41B243bb642505C3294928545',
      }

    case Network.mainnet:
    case Network.rinkeby:
      usdc = '0x640cE1dF688d0Dcb2f3Bf9B1E69d8F64c59D439E' // correct
      usdt = '0xE800ecE7C7B8682C9Af830fAE95514F7c20BACFb' // correct

      ethUsdcPool =  'ADD_ADDRESS',
      ethUsdtPool = 'ADD_ADDRESS',

      ethAggregator = '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e'
      break;
  }

  return {
    usdc,
    usdt,
    ethUsdcPool,
    ethUsdtPool,
    ethAggregator,
    factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
    positionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  }
}
