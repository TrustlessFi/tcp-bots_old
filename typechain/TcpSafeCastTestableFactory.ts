/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TcpSafeCastTestable } from "./TcpSafeCastTestable";

export class TcpSafeCastTestableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TcpSafeCastTestable> {
    return super.deploy(overrides || {}) as Promise<TcpSafeCastTestable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TcpSafeCastTestable {
    return super.attach(address) as TcpSafeCastTestable;
  }
  connect(signer: Signer): TcpSafeCastTestableFactory {
    return super.connect(signer) as TcpSafeCastTestableFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TcpSafeCastTestable {
    return new Contract(address, _abi, signerOrProvider) as TcpSafeCastTestable;
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
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "_toInt24",
    outputs: [
      {
        internalType: "int24",
        name: "r",
        type: "int24",
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
    name: "_toUint176",
    outputs: [
      {
        internalType: "uint176",
        name: "r",
        type: "uint176",
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
    name: "_toUint184",
    outputs: [
      {
        internalType: "uint184",
        name: "r",
        type: "uint184",
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
    name: "_toUint40",
    outputs: [
      {
        internalType: "uint40",
        name: "r",
        type: "uint40",
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
    name: "_toUint48",
    outputs: [
      {
        internalType: "uint48",
        name: "r",
        type: "uint48",
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
  "0x60806040523480156100115760006000fd5b50610017565b611681806100266000396000f3fe60806040523480156100115760006000fd5b50600436106101715760003560e01c806387112273116100ce578063be0bdabc11610082578063d142b87711610067578063d142b8771461066d578063e13450ca146106ca578063fa514ee51461071757610171565b8063be0bdabc146105e1578063d093dc4e1461062757610171565b806393fcc268116100b357806393fcc26814610512578063a8d43fc914610558578063b414a9be1461059e57610171565b8063871122731461048957806391ab11b6146104cc57610171565b806347af8c4a11610125578063668e8b4a1161010a578063668e8b4a1461038c5780636cabde0d146103d55780636dc3c6041461043057610171565b806347af8c4a146102f4578063529e9fea1461034557610171565b80630dd3fd46116101565780630dd3fd461461021d57806322174fe7146102635780632e510f3f146102ae57610171565b80630147e1e3146101775780630d2506e4146101d357610171565b60006000fd5b6101a46004803603602081101561018e5760006000fd5b810190808035906020019092919050505061076c565b604051808276ffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610200600480360360208110156101ea5760006000fd5b8101908080359060200190929190505050610789565b604051808264ffffffffff16815260200191505060405180910390f35b61024a600480360360208110156102345760006000fd5b81019080803590602001909291905050506107a6565b604051808260030b815260200191505060405180910390f35b6102906004803603602081101561027a5760006000fd5b81019080803590602001909291905050506107c3565b604051808265ffffffffffff16815260200191505060405180910390f35b6102db600480360360208110156102c55760006000fd5b81019080803590602001909291905050506107e0565b6040518082600f0b815260200191505060405180910390f35b6103216004803603602081101561030b5760006000fd5b81019080803590602001909291905050506107fd565b60405180826bffffffffffffffffffffffff16815260200191505060405180910390f35b6103726004803603602081101561035c5760006000fd5b810190808035906020019092919050505061081a565b604051808261ffff16815260200191505060405180910390f35b6103b9600480360360208110156103a35760006000fd5b8101908080359060200190929190505050610837565b604051808263ffffffff16815260200191505060405180910390f35b610402600480360360208110156103ec5760006000fd5b8101908080359060200190929190505050610854565b604051808275ffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61045d600480360360208110156104475760006000fd5b8101908080359060200190929190505050610871565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104b6600480360360208110156104a05760006000fd5b810190808035906020019092919050505061088e565b6040518082815260200191505060405180910390f35b6104f9600480360360208110156104e35760006000fd5b81019080803590602001909291905050506108ab565b604051808260000b815260200191505060405180910390f35b61053f600480360360208110156105295760006000fd5b81019080803590602001909291905050506108c8565b604051808260020b815260200191505060405180910390f35b6105856004803603602081101561056f5760006000fd5b81019080803590602001909291905050506108e5565b604051808260ff16815260200191505060405180910390f35b6105cb600480360360208110156105b55760006000fd5b8101908080359060200190929190505050610902565b6040518082815260200191505060405180910390f35b61060e600480360360208110156105f85760006000fd5b810190808035906020019092919050505061091f565b604051808260070b815260200191505060405180910390f35b6106546004803603602081101561063e5760006000fd5b810190808035906020019092919050505061093c565b604051808260010b815260200191505060405180910390f35b61069a600480360360208110156106845760006000fd5b8101908080359060200190929190505050610959565b604051808277ffffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106f7600480360360208110156106e15760006000fd5b8101908080359060200190929190505050610976565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6107446004803603602081101561072e5760006000fd5b8101908080359060200190929190505050610993565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600061077f826109b0909063ffffffff16565b905080505b919050565b600061079c82610a51909063ffffffff16565b905080505b919050565b60006107b982610ae0909063ffffffff16565b905080505b919050565b60006107d682610b99909063ffffffff16565b905080505b919050565b60006107f382610c29909063ffffffff16565b905080505b919050565b600061081082610cee909063ffffffff16565b905080505b919050565b600061082d82610d84909063ffffffff16565b905080505b919050565b600061084a82610e10909063ffffffff16565b905080505b919050565b600061086782610e9e909063ffffffff16565b905080505b919050565b600061088482610f3e909063ffffffff16565b905080505b919050565b60006108a182610fdc909063ffffffff16565b905080505b919050565b60006108be82611085909063ffffffff16565b905080505b919050565b60006108db8261113b909063ffffffff16565b905080505b919050565b60006108f8826111f3909063ffffffff16565b905080505b919050565b60006109158261127e909063ffffffff16565b905080505b919050565b600061093282611309909063ffffffff16565b905080505b919050565b600061094f826113c6909063ffffffff16565b905080505b919050565b600061096c8261147d909063ffffffff16565b905080505b919050565b60006109898261151f909063ffffffff16565b905080505b919050565b60006109a6826115b1909063ffffffff16565b905080505b919050565b60007701000000000000000000000000000000000000000000000082101515610a44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203138342062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050610a4c565b919050565b60006501000000000082101515610ad3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203430206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610adb565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000008212158015610b155750638000000082125b1515610b8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203332206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610b94565b919050565b6000660100000000000082101515610c1c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203438206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610c24565b919050565b60007fffffffffffffffffffffffffffffffff800000000000000000000000000000008212158015610c6a57506f8000000000000000000000000000000082125b1515610ce1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203132382062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050610ce9565b919050565b60006c0100000000000000000000000082101515610d77576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203936206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610d7f565b919050565b60006201000082101515610e03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203136206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610e0b565b919050565b600064010000000082101515610e91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203332206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050610e99565b919050565b600076010000000000000000000000000000000000000000000082101515610f31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203137362062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050610f39565b919050565b60007401000000000000000000000000000000000000000082101515610fcf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203136302062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050610fd7565b919050565b60007f800000000000000000000000000000000000000000000000000000000000000082101515611078576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f6f2062696720666f7220696e74323536000000000000000000000000000081526020015060200191505060405180910390fd5b819050611080565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8082121580156110b75750608082125b151561112e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f6d6f7265207468616e203820626974730000000000000000000000000000000081526020015060200191505060405180910390fd5b819050611136565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000821215801561116f57506280000082125b15156111e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203234206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b8190506111ee565b919050565b600061010082101515611271576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f6d6f7265207468616e203820626974730000000000000000000000000000000081526020015060200191505060405180910390fd5b819050611279565b919050565b6000600082121515156112fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f76616c7565206e6f7420706f736974697665000000000000000000000000000081526020015060200191505060405180910390fd5b819050611304565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffff80000000000000008212158015611342575067800000000000000082125b15156113b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b8190506113c1565b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800082121580156113f9575061800082125b1515611470576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203136206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b819050611478565b919050565b6000780100000000000000000000000000000000000000000000000082101515611512576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203139322062697473000000000000000000000000000081526020015060200191505060405180910390fd5b81905061151a565b919050565b600068010000000000000000821015156115a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6d6f7265207468616e203634206269747300000000000000000000000000000081526020015060200191505060405180910390fd5b8190506115ac565b919050565b60007001000000000000000000000000000000008210151561163e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6d6f7265207468616e203132382062697473000000000000000000000000000081526020015060200191505060405180910390fd5b819050611646565b91905056fea2646970667358221220fa1a570cf7bfc62fd81068422b54b09773e124ea0ff72ea069738d5d1646b04864736f6c63430007060033";