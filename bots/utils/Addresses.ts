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
        usdc: '0x5930a362f5f107e2E0628Ca9D2371a4fAcF31BFA',
        usdt: '0xE74b281b820c039c215feFF841127216925663EB',

        ethUsdcPool: 'ADD_ADDRESS',
        ethUsdtPool: 'ADD_ADDRESS',

        factory: '0x5f5bCE32f8b8aE0977DE9fb8298B9074602899F5',
        router: '0xfE0cae103cB3aA14eF7fbf1Cee4B3EDeC7301D5B',
        positionManager: '0x774b86547c826315Fe7A79C5185D56e82A708db8',

        ethAggregator: '0xe3DBF05C313eBB2Ef5dc9805533326A30543fd17',
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
