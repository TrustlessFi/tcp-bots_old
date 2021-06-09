/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { MockProtocolToken } from "./MockProtocolToken";

export class MockProtocolTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockProtocolToken> {
    return super.deploy(overrides || {}) as Promise<MockProtocolToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockProtocolToken {
    return super.attach(address) as MockProtocolToken;
  }
  connect(signer: Signer): MockProtocolTokenFactory {
    return super.connect(signer) as MockProtocolTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockProtocolToken {
    return new Contract(address, _abi, signerOrProvider) as MockProtocolToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b60ae806100256000396000f3fe608060405234801560105760006000fd5b5060043610602c5760003560e01c80635c19a95c14603257602c565b60006000fd5b60726004803603602081101560475760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506074565b005b5b5056fea26469706673582212209f62395a0b926634d12c45fe78cfea732597e900d97ba4b82b57137a2f68618664736f6c63430007060033";