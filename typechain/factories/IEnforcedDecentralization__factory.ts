/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IEnforcedDecentralization,
  IEnforcedDecentralizationInterface,
} from "../IEnforcedDecentralization";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "signature",
        type: "string",
      },
    ],
    name: "ActionBlacklisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "startTime",
        type: "uint64",
      },
    ],
    name: "PhaseOneStartTimeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "phase",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "startTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "delaysRemaining",
        type: "uint8",
      },
    ],
    name: "PhaseStartDelayed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "locktime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "delaysRemaining",
        type: "uint8",
      },
    ],
    name: "UpdateLockDelayed",
    type: "event",
  },
  {
    inputs: [],
    name: "currentPhase",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
    ],
    name: "requireValidAction",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "phaseOneStartTime",
        type: "uint64",
      },
    ],
    name: "setPhaseOneStartTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "transferEmergencyShutdownTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IEnforcedDecentralization__factory {
  static readonly abi = _abi;
  static createInterface(): IEnforcedDecentralizationInterface {
    return new utils.Interface(_abi) as IEnforcedDecentralizationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEnforcedDecentralization {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IEnforcedDecentralization;
  }
}