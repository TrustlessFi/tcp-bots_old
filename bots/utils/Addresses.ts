// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';

export type seedAddressesType = {
  tcpGovernorAlpha: string,
  tfGovernorAlpha: string,
}

export const getSeedAddresses = (_network = ''): seedAddressesType => {
  const network = _network !== '' ? _network : hre.network.name

  switch (network) {
    case 'mainnet':
    case 'rinkeby':
      return {
        tcpGovernorAlpha: '0x974fc7052Fa0faf573b6fC1c0FacC0ED0A69c075',
        tfGovernorAlpha: '0x294f91d5110FbeBa208F1D0F1cB09338ee21108B',
      }
    case 'hardhat':
    case 'dockerBot':
    case 'localhost':
    case 'localDeployment':
      return {
        tcpGovernorAlpha: '0x28f5D55Df47d1505DfdBfE803aE1F3391E21Ad1b',
        tfGovernorAlpha: '0x57706dEEED2a5DadAc4f841B6f34E370B7bddE30',
      }
    default:
      throw 'unknown network name: ' + network
  }
}

export type externalAddressesType = {
  usdc: string,
  usdt: string,
  tusd?: string,

  positionManager: string,
  factory: string,
  router: string,

  ethAggregator: string,
  multisig: string,
}

export const getExternalAddresses = (_network = ''): externalAddressesType => {
  const network = _network !== '' ? _network : hre.network.name

  let usdc: string
  let usdt: string

  let ethAggregator: string
  let multisig: string

  switch (network) {
    case 'mainnet':
    case 'rinkeby':
      usdc = '0x640cE1dF688d0Dcb2f3Bf9B1E69d8F64c59D439E' // correct
      usdt = '0xE800ecE7C7B8682C9Af830fAE95514F7c20BACFb' // correct

      ethAggregator = '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e'
      multisig = '0xd3b8BAE13a2Ee0225a5835b5a4Cd61990826cFD9'
      break;

    case 'hardhat':
    case 'dockerBot':
    case 'localhost':
    case 'localDeployment':
      usdc = ''
      usdt = ''

      ethAggregator = ''
      multisig = '0xaC5e1ccc84169A5Aa4c386EAE98c7CA863FEE6Bf'
      break

    default:
      throw 'unknown network name: ' + hre.network.name
  }

  return {
    usdc,
    usdt,
    multisig,
    ethAggregator,
    factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
    positionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  }
}
