// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';

export type seedAddresses = {
  tcpGovernorAlpha: string,
  tfGovernorAlpha: string,
  nftPositionManager: string,
  swapRouter: string,
  multisig: string,
}

export const isRunTestsEnvironment = (networkName: string): boolean => {
  switch (networkName) {
    case 'hardhat':
      return true
    default:
      return false
  }
}

export const getSeedAddresses = (): seedAddresses => {
  switch (hre.network.name) {
    case 'mainnet':
    case 'rinkeby':
      return {
        tcpGovernorAlpha: '0x974fc7052Fa0faf573b6fC1c0FacC0ED0A69c075',
        tfGovernorAlpha: '0x294f91d5110FbeBa208F1D0F1cB09338ee21108B',

        nftPositionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
        swapRouter: '0xE592427A0AEce92De3Edee1F18E0157C05861564',

        multisig: '0xd3b8BAE13a2Ee0225a5835b5a4Cd61990826cFD9',
      }

    case 'hardhat':
    case 'dockerBot':
    case 'localhost':
    case 'localDeployment':
      return {
        tcpGovernorAlpha: '0x28f5D55Df47d1505DfdBfE803aE1F3391E21Ad1b',
        tfGovernorAlpha: '0x57706dEEED2a5DadAc4f841B6f34E370B7bddE30',
        nftPositionManager: '0x774b86547c826315Fe7A79C5185D56e82A708db8',
        swapRouter: '0xfE0cae103cB3aA14eF7fbf1Cee4B3EDeC7301D5B',
        multisig: '0xaC5e1ccc84169A5Aa4c386EAE98c7CA863FEE6Bf',
      }
    default:
      throw 'unknown network name: ' + hre.network.name
  }
}
