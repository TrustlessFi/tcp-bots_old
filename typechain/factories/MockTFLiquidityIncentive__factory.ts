/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockTFLiquidityIncentive } from "../MockTFLiquidityIncentive";

export class MockTFLiquidityIncentive__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tfGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTFLiquidityIncentive> {
    return super.deploy(
      _tfGovernor,
      overrides || {}
    ) as Promise<MockTFLiquidityIncentive>;
  }
  getDeployTransaction(
    _tfGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tfGovernor, overrides || {});
  }
  attach(address: string): MockTFLiquidityIncentive {
    return super.attach(address) as MockTFLiquidityIncentive;
  }
  connect(signer: Signer): MockTFLiquidityIncentive__factory {
    return super.connect(signer) as MockTFLiquidityIncentive__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTFLiquidityIncentive {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockTFLiquidityIncentive;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITFGovernor",
        name: "_tfGovernor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b5060405161020b38038061020b833981810160405260208110156100355760006000fd5b81019080805190602001909291905050505b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5061008f565b61016d8061009e6000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c806340c10f191461003657610030565b60006000fd5b6100836004803603604081101561004d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610085565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630e52d7c683836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156101195760006000fd5b505af115801561012e573d600060003e3d6000fd5b505050505b505056fea2646970667358221220fa24fed65b7a9db71e9da63dcfd9f6220eed5c36a92c5c7eda73a1401d4d327564736f6c63430007060033";