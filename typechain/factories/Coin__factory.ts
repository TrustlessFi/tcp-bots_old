/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Coin } from "../Coin";

export class Coin__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Coin> {
    return super.deploy(overrides || {}) as Promise<Coin>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Coin {
    return super.attach(address) as Coin;
  }
  connect(signer: Signer): Coin__factory {
    return super.connect(signer) as Coin__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Coin {
    return new Contract(address, _abi, signerOrProvider) as Coin;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "countMinted",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "FlashMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "governor",
        type: "address",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "paramName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ParameterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Stopped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "burnReserves",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "distributeReserves",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flashLoanFeeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "countTokensToMint",
        type: "uint256",
      },
    ],
    name: "flashMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "contract IGovernor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IGovernor",
        name: "_governor",
        type: "address",
      },
    ],
    name: "init",
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
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reserves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setFlashLoanFeeRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopped",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "action",
        type: "bytes4",
      },
    ],
    name: "validUpdate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052660aa87bee538000600c553480156200001c57600080fd5b506040518060400160405280600a81526020017f436f696e20546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f434f494e000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000a192919062000128565b508060049080519060200190620000ba92919062000128565b506012600560006101000a81548160ff021916908360ff160217905550505033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b81905550620001de565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620001605760008555620001ac565b82601f106200017b57805160ff1916838001178555620001ac565b82800160010185558215620001ac579182015b82811115620001ab5782518255916020019190600101906200018e565b5b509050620001bb9190620001bf565b5090565b5b80821115620001da576000816000905550600101620001c0565b5090565b612dc280620001ee6000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806370a08231116100e3578063a457c2d71161008c578063d5f3948811610066578063d5f39488146107cb578063dd62ed3e146107ff578063ea7fe9e51461087757610198565b8063a457c2d7146106d5578063a9059cbb14610739578063c59fb1ab1461079d57610198565b806379cc6790116100bd57806379cc6790146105e65780638c9f305f1461063457806395d89b411461065257610198565b806370a082311461055057806375172a8b146105a857806375f12b21146105c657610198565b806319ab453c11610145578063313ce5671161011f578063313ce5671461047d578063395093511461049e578063449a52f81461050257610198565b806319ab453c1461038757806319ffd7ce146103cb57806323b872dd146103f957610198565b8063113cf1ab11610176578063113cf1ab146102b857806316f9428f1461031b57806318160ddd1461036957610198565b806306fdde031461019d578063095ea7b3146102205780630c340a2414610284575b600080fd5b6101a56108a5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101e55780820151818401526020810190506101ca565b50505050905090810190601f1680156102125780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61026c6004803603604081101561023657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610947565b60405180821515815260200191505060405180910390f35b61028c610965565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610303600480360360208110156102ce57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061098b565b60405180821515815260200191505060405180910390f35b6103676004803603604081101561033157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109f3565b005b610371610bce565b6040518082815260200191505060405180910390f35b6103c96004803603602081101561039d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bd8565b005b6103f7600480360360208110156103e157600080fd5b8101908080359060200190929190505050610ff8565b005b6104656004803603606081101561040f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061156b565b60405180821515815260200191505060405180910390f35b610485611644565b604051808260ff16815260200191505060405180910390f35b6104ea600480360360408110156104b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061165b565b60405180821515815260200191505060405180910390f35b61054e6004803603604081101561051857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061170e565b005b6105926004803603602081101561056657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118e8565b6040518082815260200191505060405180910390f35b6105b0611930565b6040518082815260200191505060405180910390f35b6105ce6119d9565b60405180821515815260200191505060405180910390f35b610632600480360360408110156105fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506119ec565b005b61063c611ad7565b6040518082815260200191505060405180910390f35b61065a611add565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561069a57808201518184015260208101905061067f565b50505050905090810190601f1680156106c75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610721600480360360408110156106eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611b7f565b60405180821515815260200191505060405180910390f35b6107856004803603604081101561074f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611c4c565b60405180821515815260200191505060405180910390f35b6107c9600480360360208110156107b357600080fd5b8101908080359060200190929190505050611c6a565b005b6107d3611da1565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108616004803603604081101561081557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611dc7565b6040518082815260200191505060405180910390f35b6108a36004803603602081101561088d57600080fd5b8101908080359060200190929190505050611e4e565b005b606060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561093d5780601f106109125761010080835404028352916020019161093d565b820191906000526020600020905b81548152906001019060200180831161092057829003601f168201915b5050505050905090565b600061095b610954611f9e565b8484611fa6565b6001905092915050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600a6000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6002600b541415610a6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b436f6e74726163743a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b6002600b81905550600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385aa61036040518163ffffffff1660e01b815260040160206040518083038186803b158015610adc57600080fd5b505afa158015610af0573d6000803e3d6000fd5b505050506040513d6020811015610b0657600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4e6f7420417574686f72697a65642e000000000000000000000000000000000081525060200191505060405180910390fd5b610bc230838361219d565b6001600b819055505050565b6000600254905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f476f7665726e65643a20496e6974206e6f7420617574686f72697a65642e000081525060200191505060405180910390fd5b600660006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905580600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d6957600080fd5b505afa158015610d7d573d6000803e3d6000fd5b505050506040513d6020811015610d9357600080fd5b8101908080519060200190929190505050600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166311df99956040518163ffffffff1660e01b815260040160206040518083038186803b158015610e4c57600080fd5b505afa158015610e60573d6000803e3d6000fd5b505050506040513d6020811015610e7657600080fd5b8101908080519060200190929190505050600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d478b0876040518163ffffffff1660e01b815260040160206040518083038186803b158015610f2f57600080fd5b505afa158015610f43573d6000803e3d6000fd5b505050506040513d6020811015610f5957600080fd5b8101908080519060200190929190505050600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610fb261245e565b8073ffffffffffffffffffffffffffffffffffffffff167f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e660405160405180910390a250565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561106257600080fd5b505af1158015611076573d6000803e3d6000fd5b505050506002600b5414156110f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b50726f746f636f6c3a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b6002600b81905550600560159054906101000a900460ff161561117e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f476f7665726e65643a20436f6e74726163742069732073746f707065642e000081525060200191505060405180910390fd5b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b1580156111e657600080fd5b505afa1580156111fa573d6000803e3d6000fd5b505050506040513d602081101561121057600080fd5b810190808051906020019092919050505015611277576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612c8a6028913960400191505060405180910390fd5b60008114156112ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f4e6f6f702e00000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000808290506000600c541461132b57611313600c54846124d190919063ffffffff16565b9150611328828261257090919063ffffffff16565b90505b61133533846125f8565b3373ffffffffffffffffffffffffffffffffffffffff16630591983884836040518363ffffffff1660e01b81526004018083815260200182815260200192505050600060405180830381600087803b15801561139057600080fd5b505af11580156113a4573d6000803e3d6000fd5b505050506113b233846127bf565b60008214611486573073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561144957600080fd5b505af115801561145d573d6000803e3d6000fd5b505050506040513d602081101561147357600080fd5b8101908080519060200190929190505050505b3373ffffffffffffffffffffffffffffffffffffffff167fc1d5a9a0a7cdddbc3db5b9aeffbc9fa1ba5f7275fbd46d9de20ec463f8b8cfbd8484604051808381526020018281526020019250505060405180910390a250506001600b81905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561155057600080fd5b505af1158015611564573d6000803e3d6000fd5b5050505050565b600061157884848461219d565b61163984611584611f9e565b61163485604051806060016040528060288152602001612cb260289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006115ea611f9e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546129839092919063ffffffff16565b611fa6565b600190509392505050565b6000600560009054906101000a900460ff16905090565b6000611704611668611f9e565b846116ff8560016000611679611f9e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612a4390919063ffffffff16565b611fa6565b6001905092915050565b6002600b541415611787576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b436f6e74726163743a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b6002600b81905550600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b1580156117f757600080fd5b505afa15801561180b573d6000803e3d6000fd5b505050506040513d602081101561182157600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146118d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4e6f7420417574686f72697a65642e000000000000000000000000000000000081525060200191505060405180910390fd5b6118dc82826125f8565b6001600b819055505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60003073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561199957600080fd5b505afa1580156119ad573d6000803e3d6000fd5b505050506040513d60208110156119c357600080fd5b8101908080519060200190929190505050905090565b600560159054906101000a900460ff1681565b6002600b541415611a65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b436f6e74726163743a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b6002600b819055506000611aac82604051806060016040528060248152602001612cda60249139611a9d86611a98611f9e565b611dc7565b612acb9092919063ffffffff16565b9050611ac083611aba611f9e565b83611fa6565b611aca83836127bf565b506001600b819055505050565b600c5481565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b755780601f10611b4a57610100808354040283529160200191611b75565b820191906000526020600020905b815481529060010190602001808311611b5857829003601f168201915b5050505050905090565b6000611c42611b8c611f9e565b84611c3d85604051806060016040528060258152602001612d686025913960016000611bb6611f9e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546129839092919063ffffffff16565b611fa6565b6001905092915050565b6000611c60611c59611f9e565b848461219d565b6001905092915050565b6002600b541415611ce3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b436f6e74726163743a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b6002600b81905550600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632453c566336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060006040518083038186803b158015611d7457600080fd5b505afa158015611d88573d6000803e3d6000fd5b50505050611d9630826127bf565b6001600b8190555050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611f11576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b80600c81905550670de0b6b3a7640000600c5410611f2e57600080fd5b60405180807f666c6173684c6f616e4665655261746500000000000000000000000000000000815250601001905060405180910390207f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b920933826040518082815260200191505060405180910390a250565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561202c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612d446024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156120b2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612c206022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612223576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612d1f6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156122a9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612bdb6023913960400191505060405180910390fd5b6122b4838383612b8b565b61231f81604051806060016040528060268152602001612c64602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546129839092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506123b2816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612a4390919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6001600a600063ea7fe9e560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550565b6000808314806124e15750600082145b156124ef576000905061256a565b8183029050818382816124fe57fe5b0414612555576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612c426022913960400191505060405180910390fd5b670de0b6b3a7640000818161256657fe5b0490505b92915050565b6000808284019050838110156125ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561269b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6126a760008383612b8b565b6126bc81600254612a4390919063ffffffff16565b600281905550612713816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612a4390919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612845576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612cfe6021913960400191505060405180910390fd5b61285182600083612b8b565b6128bc81604051806060016040528060228152602001612bfe602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546129839092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061291381600254612b9090919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000838311158290612a30576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156129f55780820151818401526020810190506129da565b50505050905090810190601f168015612a225780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015612ac1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000838311158290612b78576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612b3d578082015181840152602081019050612b22565b50505050905090810190601f168015612b6a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b505050565b6000612bd283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612983565b90509291505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f772e45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365476f7665726e65643a204e6f7420617661696c61626c6520647572696e672073687574646f776e2e45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212204d8b34c2372d95431fde002de55d598d42d6fb60592eb0a490cbc4f9a64b046264736f6c63430007040033";
