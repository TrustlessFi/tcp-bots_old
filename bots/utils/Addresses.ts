// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';

export type seedAddressesType = {
  governor: string,
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
      }

    case Network.rinkeby:
      return {
        governor: '0x95608b60e27a0448FcC5E9ce222a65F3aED6e67F',
      }

    case Network.mainnet:
      throw 'Hardcoded addresses requested for mainnet'
  }
}

export type externalAddressesType = {
  router: string,
  ethAggregator: string,
}

export const getExternalAddresses = (): externalAddressesType => {
  const network = getCurrentNetwork()

  switch (network) {
    case Network.hardhat:
    case Network.dockerBot:
    case Network.localhost:
    case Network.localDeployment:
      return {
        ethAggregator: '0x774b86547c826315Fe7A79C5185D56e82A708db8',
        router: '0x5f5bCE32f8b8aE0977DE9fb8298B9074602899F5',
      }

    case Network.rinkeby:
      return {
        ethAggregator: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e',
        router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
      }

    case Network.mainnet:
      throw 'Mainnet addresses not set'
  }
}
