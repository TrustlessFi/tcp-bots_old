/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TestUniswapV3SwapPay } from "./TestUniswapV3SwapPay";

export class TestUniswapV3SwapPayFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestUniswapV3SwapPay> {
    return super.deploy(overrides || {}) as Promise<TestUniswapV3SwapPay>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestUniswapV3SwapPay {
    return super.attach(address) as TestUniswapV3SwapPay;
  }
  connect(signer: Signer): TestUniswapV3SwapPayFactory {
    return super.connect(signer) as TestUniswapV3SwapPayFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswapV3SwapPay {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestUniswapV3SwapPay;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "pay0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pay1",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b610676806100266000396000f3fe60806040523480156100115760006000fd5b506004361061003b5760003560e01c8063f13cdf9014610041578063fa461e33146100f05761003b565b60006000fd5b6100ee600480360360e08110156100585760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190505050610183565b005b610181600480360360608110156101075760006000fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156101395760006000fd5b82018360208201111561014c5760006000fd5b8035906020019184600183028401116401000000008311171561016f5760006000fd5b90919293909091929390505050610323565b005b8673ffffffffffffffffffffffffffffffffffffffff1663128acb0887878688338888604051602001808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561027f5780820151818401525b602081019050610263565b50505050905090810190601f1680156102ac5780820380516001836020036101000a031916815260200191505b509650505050505050604060405180830381600087803b1580156102d05760006000fd5b505af11580156102e5573d600060003e3d6000fd5b505050506040513d60408110156102fc5760006000fd5b81019080805190602001909291908051906020019092919050505050505b50505050505050565b6000600060008484606081101561033a5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919050505092509250925060008211156104da573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156103cb5760006000fd5b505afa1580156103e0573d600060003e3d6000fd5b505050506040513d60208110156103f75760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8433856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156104975760006000fd5b505af11580156104ac573d600060003e3d6000fd5b505050506040513d60208110156104c35760006000fd5b810190808051906020019092919050505050610636565b6000811115610635573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561052a5760006000fd5b505afa15801561053f573d600060003e3d6000fd5b505050506040513d60208110156105565760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8433846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156105f65760006000fd5b505af115801561060b573d600060003e3d6000fd5b505050506040513d60208110156106225760006000fd5b8101908080519060200190929190505050505b5b5050505b5050505056fea264697066735822122051f919457ada65be21168c795f133ab45e04f9e49d550d48a6b25d3e3b66db5b64736f6c63430007060033";