/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapV2Migrator } from "../UniswapV2Migrator";

export class UniswapV2Migrator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factoryV1: string,
    _router: string,
    overrides?: Overrides
  ): Promise<UniswapV2Migrator> {
    return super.deploy(
      _factoryV1,
      _router,
      overrides || {}
    ) as Promise<UniswapV2Migrator>;
  }
  getDeployTransaction(
    _factoryV1: string,
    _router: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factoryV1, _router, overrides || {});
  }
  attach(address: string): UniswapV2Migrator {
    return super.attach(address) as UniswapV2Migrator;
  }
  connect(signer: Signer): UniswapV2Migrator__factory {
    return super.connect(signer) as UniswapV2Migrator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Migrator {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Migrator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryV1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610d3c380380610d3c8339818101604052604081101561003357600080fd5b8101908080519060200190929190805190602001909291905050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505060805160601c60a05160601c610c4c6100f06000398061049a52806104c4528061061852508060c15250610c4c6000f3fe6080604052600436106100225760003560e01c8063b7df1d251461002e57610029565b3661002957005b600080fd5b34801561003a57600080fd5b506100bb600480360360a081101561005157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100bd565b005b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306f2bf62876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561015c57600080fd5b505afa158015610170573d6000803e3d6000fd5b505050506040513d602081101561018657600080fd5b8101908080519060200190929190505050905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561021857600080fd5b505afa15801561022c573d6000803e3d6000fd5b505050506040513d602081101561024257600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561031057600080fd5b505af1158015610324573d6000803e3d6000fd5b505050506040513d602081101561033a57600080fd5b81019080805190602001909291905050506103bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5452414e534645525f46524f4d5f4641494c454400000000000000000000000081525060200191505060405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1663f88bf15a846001807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518563ffffffff1660e01b8152600401808581526020018481526020018381526020018281526020019450505050506040805180830381600087803b15801561044b57600080fd5b505af115801561045f573d6000803e3d6000fd5b505050506040513d604081101561047557600080fd5b810190808051906020019092919080519060200190929190505050915091506104bf897f000000000000000000000000000000000000000000000000000000000000000083610673565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f305d719858d868e8e8e8e6040518863ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200196505050505050506060604051808303818588803b1580156105b557600080fd5b505af11580156105c9573d6000803e3d6000fd5b50505050506040513d60608110156105e057600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050505091509150818311156106505761063e8b7f00000000000000000000000000000000000000000000000000000000000000006000610673565b61064b8b3384860361084f565b610666565b808411156106655761066433828603610a2b565b5b5b5050505050505050505050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663095ea7b38585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061074c5780518252602082019150602081019050602083039250610729565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146107ae576040519150601f19603f3d011682016040523d82523d6000602084013e6107b3565b606091505b50915091508180156107f357506000815114806107f257508080602001905160208110156107e057600080fd5b81019080805190602001909291905050505b5b610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180610bbf602b913960400191505060405180910390fd5b5050505050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106109285780518252602082019150602081019050602083039250610905565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461098a576040519150601f19603f3d011682016040523d82523d6000602084013e61098f565b606091505b50915091508180156109cf57506000815114806109ce57508080602001905160208110156109bc57600080fd5b81019080805190602001909291905050505b5b610a24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610bea602d913960400191505060405180910390fd5b5050505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff81118015610a5d57600080fd5b506040519080825280601f01601f191660200182016040528015610a905781602001600182028036833780820191505090505b506040518082805190602001908083835b60208310610ac45780518252602082019150602081019050602083039250610aa1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610b26576040519150601f19603f3d011682016040523d82523d6000602084013e610b2b565b606091505b5050905080610b85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526034815260200180610b8b6034913960400191505060405180910390fd5b50505056fe5472616e7366657248656c7065723a3a736166655472616e736665724554483a20455448207472616e73666572206661696c65645472616e7366657248656c7065723a3a73616665417070726f76653a20617070726f7665206661696c65645472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564a2646970667358221220b0ad0fe97b12687c3f4608684cbf87eb580ebcba06e7eb0002b462085b4e61b064736f6c63430006060033";