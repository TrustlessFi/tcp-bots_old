/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { CoinSafeCastTestable } from "../CoinSafeCastTestable";

export class CoinSafeCastTestable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoinSafeCastTestable> {
    return super.deploy(overrides || {}) as Promise<CoinSafeCastTestable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoinSafeCastTestable {
    return super.attach(address) as CoinSafeCastTestable;
  }
  connect(signer: Signer): CoinSafeCastTestable__factory {
    return super.connect(signer) as CoinSafeCastTestable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinSafeCastTestable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CoinSafeCastTestable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "_toInt128",
    outputs: [
      {
        internalType: "int128",
        name: "r",
        type: "int128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "_toInt16",
    outputs: [
      {
        internalType: "int16",
        name: "r",
        type: "int16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toInt256",
    outputs: [
      {
        internalType: "int256",
        name: "r",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "_toInt32",
    outputs: [
      {
        internalType: "int32",
        name: "r",
        type: "int32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "_toInt64",
    outputs: [
      {
        internalType: "int64",
        name: "r",
        type: "int64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "_toInt8",
    outputs: [
      {
        internalType: "int8",
        name: "r",
        type: "int8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint112",
    outputs: [
      {
        internalType: "uint112",
        name: "r",
        type: "uint112",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint128",
    outputs: [
      {
        internalType: "uint128",
        name: "r",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint16",
    outputs: [
      {
        internalType: "uint16",
        name: "r",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint160",
    outputs: [
      {
        internalType: "uint160",
        name: "r",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint192",
    outputs: [
      {
        internalType: "uint192",
        name: "r",
        type: "uint192",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "_toUint256",
    outputs: [
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint32",
    outputs: [
      {
        internalType: "uint32",
        name: "r",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint64",
    outputs: [
      {
        internalType: "uint64",
        name: "r",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint8",
    outputs: [
      {
        internalType: "uint8",
        name: "r",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "_toUint96",
    outputs: [
      {
        internalType: "uint96",
        name: "r",
        type: "uint96",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b611183806100266000396000f3fe60806040523480156100115760006000fd5b50600436106101055760003560e01c806391ab11b611610098578063d093dc4e11610067578063d093dc4e1461047c578063d142b877146104c2578063e13450ca1461051f578063fa514ee51461056c57610105565b806391ab11b614610367578063a8d43fc9146103ad578063b414a9be146103f3578063be0bdabc1461043657610105565b8063529e9fea116100d4578063529e9fea1461023b578063668e8b4a146102825780636dc3c604146102cb578063871122731461032457610105565b80630dd3fd461461010b5780631c0c0b09146101515780632e510f3f146101a457806347af8c4a146101ea57610105565b60006000fd5b610138600480360360208110156101225760006000fd5b81019080803590602001909291905050506105c1565b604051808260030b815260200191505060405180910390f35b61017e600480360360208110156101685760006000fd5b81019080803590602001909291905050506105de565b60405180826dffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101d1600480360360208110156101bb5760006000fd5b81019080803590602001909291905050506105fb565b6040518082600f0b815260200191505060405180910390f35b610217600480360360208110156102015760006000fd5b8101908080359060200190929190505050610618565b60405180826bffffffffffffffffffffffff16815260200191505060405180910390f35b610268600480360360208110156102525760006000fd5b8101908080359060200190929190505050610635565b604051808261ffff16815260200191505060405180910390f35b6102af600480360360208110156102995760006000fd5b8101908080359060200190929190505050610652565b604051808263ffffffff16815260200191505060405180910390f35b6102f8600480360360208110156102e25760006000fd5b810190808035906020019092919050505061066f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103516004803603602081101561033b5760006000fd5b810190808035906020019092919050505061068c565b6040518082815260200191505060405180910390f35b6103946004803603602081101561037e5760006000fd5b81019080803590602001909291905050506106a9565b604051808260000b815260200191505060405180910390f35b6103da600480360360208110156103c45760006000fd5b81019080803590602001909291905050506106c6565b604051808260ff16815260200191505060405180910390f35b6104206004803603602081101561040a5760006000fd5b81019080803590602001909291905050506106e3565b6040518082815260200191505060405180910390f35b6104636004803603602081101561044d5760006000fd5b8101908080359060200190929190505050610700565b604051808260070b815260200191505060405180910390f35b6104a9600480360360208110156104935760006000fd5b810190808035906020019092919050505061071d565b604051808260010b815260200191505060405180910390f35b6104ef600480360360208110156104d95760006000fd5b810190808035906020019092919050505061073a565b604051808277ffffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61054c600480360360208110156105365760006000fd5b8101908080359060200190929190505050610757565b604051808267ffffffffffffffff16815260200191505060405180910390f35b610599600480360360208110156105835760006000fd5b8101908080359060200190929190505050610774565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006105d482610791909063ffffffff16565b905080505b919050565b60006105f18261082a909063ffffffff16565b905080505b919050565b600061060e826108a2909063ffffffff16565b905080505b919050565b600061062b82610947909063ffffffff16565b905080505b919050565b6000610648826109bd909063ffffffff16565b905080505b919050565b600061066582610a29909063ffffffff16565b905080505b919050565b600061068282610a97909063ffffffff16565b905080505b919050565b600061069f82610b15909063ffffffff16565b905080505b919050565b60006106bc82610b9e909063ffffffff16565b905080505b919050565b60006106d982610c34909063ffffffff16565b905080505b919050565b60006106f682610c9f909063ffffffff16565b905080505b919050565b600061071382610d2a909063ffffffff16565b905080505b919050565b600061073082610dc7909063ffffffff16565b905080505b919050565b600061074d82610e5e909063ffffffff16565b905080505b919050565b600061076a82610ee0909063ffffffff16565b905080505b919050565b600061078782610f52909063ffffffff16565b905080505b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000000082121580156107c65750638000000082125b151561081d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806111006026913960400191505060405180910390fd5b819050610825565b919050565b60006e01000000000000000000000000000082101515610895576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806110656027913960400191505060405180910390fd5b81905061089d565b919050565b60007fffffffffffffffffffffffffffffffff8000000000000000000000000000000082121580156108e357506f8000000000000000000000000000000082125b151561093a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061108c6027913960400191505060405180910390fd5b819050610942565b919050565b60006c01000000000000000000000000821015156109b0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610fcd6026913960400191505060405180910390fd5b8190506109b8565b919050565b60006201000082101515610a1c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061101a6026913960400191505060405180910390fd5b819050610a24565b919050565b600064010000000082101515610a8a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806111006026913960400191505060405180910390fd5b819050610a92565b919050565b60007401000000000000000000000000000000000000000082101515610b08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806110d96027913960400191505060405180910390fd5b819050610b10565b919050565b60007f800000000000000000000000000000000000000000000000000000000000000082101515610b91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806111266028913960400191505060405180910390fd5b819050610b99565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808212158015610bd05750608082125b1515610c27576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110406025913960400191505060405180910390fd5b819050610c2f565b919050565b600061010082101515610c92576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110406025913960400191505060405180910390fd5b819050610c9a565b919050565b600060008212151515610d1d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f53616665436173743a2076616c7565206d75737420626520706f73697469766581526020015060200191505060405180910390fd5b819050610d25565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffff80000000000000008212158015610d63575067800000000000000082125b1515610dba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806110b36026913960400191505060405180910390fd5b819050610dc2565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80008212158015610dfa575061800082125b1515610e51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061101a6026913960400191505060405180910390fd5b819050610e59565b919050565b6000780100000000000000000000000000000000000000000000000082101515610ed3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180610ff36027913960400191505060405180910390fd5b819050610edb565b919050565b60006801000000000000000082101515610f45576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806110b36026913960400191505060405180910390fd5b819050610f4d565b919050565b600070010000000000000000000000000000000082101515610fbf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061108c6027913960400191505060405180910390fd5b819050610fc7565b91905056fe53616665436173743a2076616c756520646f65736e27742066697420696e203936206269747353616665436173743a2076616c756520646f65736e27742066697420696e20313932206269747353616665436173743a2076616c756520646f65736e27742066697420696e203136206269747353616665436173743a2076616c756520646f65736e27742066697420696e2038206269747353616665436173743a2076616c756520646f65736e27742066697420696e20313132206269747353616665436173743a2076616c756520646f65736e27742066697420696e20313238206269747353616665436173743a2076616c756520646f65736e27742066697420696e203634206269747353616665436173743a2076616c756520646f65736e27742066697420696e20313630206269747353616665436173743a2076616c756520646f65736e27742066697420696e203332206269747353616665436173743a2076616c756520646f65736e27742066697420696e20616e20696e74323536a26469706673582212207b20005bdb7da401afdf21af218f46f158e52f6a19710da735ba766c0ac211b964736f6c63430007060033";