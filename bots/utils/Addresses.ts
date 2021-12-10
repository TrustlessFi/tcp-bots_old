// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';

export type seedAddressesType = {
  governor: string,
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
    case Network.hardhat:
    case Network.dockerBot:
    case Network.localhost:
    case Network.localDeployment:
      return {
        governor: '0x8A48EC415781EaFc316E9657F367B8Adf7d6393B',
        protocolDataAggregator: '0x1799F8B71d6a9175129942D5eFFCb8cCF584C1a9',
      }

    case Network.rinkeby:
      return {
        governor: '0x95608b60e27a0448FcC5E9ce222a65F3aED6e67F',
        protocolDataAggregator: '0x8Fd52eD0d46B86aed9353C8df9CA70484EfD84Fc',
      }

    case Network.mainnet:
      throw 'Hardcoded addresses requested for mainnet'
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

  guardian: string
  authenticator: string

  ethAggregator: string,
}

export const getExternalAddresses = (): externalAddressesType => {
  const network = getCurrentNetwork()

  let usdc: string
  let usdt: string

  let ethUsdcPool: string
  let ethUsdtPool: string

  let ethAggregator: string

  let guardian: string
  let authenticator: string

  switch (network) {
    case Network.hardhat:
    case Network.dockerBot:
    case Network.localhost:
    case Network.localDeployment:
      return {
        usdc: '0xE74b281b820c039c215feFF841127216925663EB',
        usdt: '0xa720e517309af2698deb6eefFFF70ea110Fa3dF1',

        ethUsdcPool:  '0x9BAE9052C4b4F06a7aAa01b1105a7ac038D63F02',
        ethUsdtPool: '0xc6CA0036392FB0B66e82a19787FfAd0a70a6b2b8',

        ethAggregator: '0x774b86547c826315Fe7A79C5185D56e82A708db8',

        guardian: '',
        authenticator: '',

        factory: '0x870A7E07DaDF987f17ac08aF1a0015ebc78d2258',
        router: '0x5f5bCE32f8b8aE0977DE9fb8298B9074602899F5',
        positionManager: '0x981377239fdD7cDf44aBEcF5AC442aAfeCc936c7',
      }

    case Network.rinkeby:
      usdc = '0x640cE1dF688d0Dcb2f3Bf9B1E69d8F64c59D439E' // correct
      usdt = '0xE800ecE7C7B8682C9Af830fAE95514F7c20BACFb' // correct

      ethUsdcPool = '0x1fea4310c812a3b82bb8660662fD293eCB16d489'
      ethUsdtPool = '0x415d407F2A1f2b11199f3A04b639E636A058a9d6'

      guardian = '0x1D3f2E901af58E6B5546f6a85027fdC8b235103C',
      authenticator = '0xE7c474D920Aa30e568e8EDD371c729Eeee513736',

      ethAggregator = '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e' // correct
      break

    case Network.mainnet:
      throw 'Mainnet addresses not set'
  }

  return {
    usdc,
    usdt,
    ethUsdcPool,
    ethUsdtPool,
    ethAggregator,
    guardian,
    authenticator,
    // same on every public chain
    factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
    positionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  }
}
