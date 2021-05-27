// Copyright (c) 2020. All Rights Reserved
// SPDX-License-Identifier: UNLICENSED

import hre from 'hardhat';
const e = hre.ethers;
import { Contract } from "ethers";

export type seedAddresses = {
  tcpGovernorAlpha: string,
  tfGovernorAlpha: string,
  nftPositionManager: string,
  swapRouter: string,
}

export const getSeedAddresses = (): seedAddresses => {
  switch (hre.network.name) {
    case 'hardhat':
    case 'rinkeby':
    case 'mainnet':
    case 'localhost':
    default:
      return {
        tcpGovernorAlpha: '0x28f5D55Df47d1505DfdBfE803aE1F3391E21Ad1b',
        tfGovernorAlpha: '0x57706dEEED2a5DadAc4f841B6f34E370B7bddE30',
        nftPositionManager: '0x774b86547c826315Fe7A79C5185D56e82A708db8',
        swapRouter: '0xfE0cae103cB3aA14eF7fbf1Cee4B3EDeC7301D5B',
      }
  }
}
