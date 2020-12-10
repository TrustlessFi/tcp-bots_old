/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Prices } from "../Prices";

export class Prices__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Prices> {
    return super.deploy(overrides || {}) as Promise<Prices>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Prices {
    return super.attach(address) as Prices;
  }
  connect(signer: Signer): Prices__factory {
    return super.connect(signer) as Prices__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Prices {
    return new Contract(address, _abi, signerOrProvider) as Prices;
  }
}

const _abi = [
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
        internalType: "uint64",
        name: "value",
        type: "uint64",
      },
    ],
    name: "ParameterUpdated64",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cumulative",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "twapTime",
        type: "uint64",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Stopped",
    type: "event",
  },
  {
    inputs: [],
    name: "collateralPairMinTwapTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "completeSetup",
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
        internalType: "contract IGovernor",
        name: "governor_",
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
        internalType: "contract IUniswapV2Pair",
        name: "pair",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "maxTwapTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "maxPriceAge",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "normalizeDecimals",
        type: "bool",
      },
    ],
    name: "obtainPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "priceTime",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    name: "priceInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cumulative",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "priceTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "twapTime",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "t0DecimalMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "t1DecimalMultiplier",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "coinIsToken0",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "referencePairMinTwapTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "time",
        type: "uint64",
      },
    ],
    name: "setCollateralPairMinTwapTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "time",
        type: "uint64",
      },
    ],
    name: "setReferencePairMinTwapTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "pair",
        type: "address",
      },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "pair",
        type: "address",
      },
      {
        internalType: "bool",
        name: "normalizeDecimals",
        type: "bool",
      },
    ],
    name: "viewPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "priceTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "twapTime",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052610e10600760006101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550610960600760086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555034801561006657600080fd5b5033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600681905550613074806100bf6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638aea8f7111610081578063c31ff2db1161005b578063c31ff2db14610337578063e2b22a411461035f578063fb5bb24314610387576100d4565b80638aea8f71146102b157806392d73b53146102bb57806396e85ced146102f3576100d4565b806319ab453c116100b257806319ab453c1461014f57806338cdc1f5146101935780636d048d5314610219576100d4565b806307da68f5146100d957806309d0933b146100e35780630c340a241461011b575b600080fd5b6100e1610424565b005b610119600480360360208110156100f957600080fd5b81019080803567ffffffffffffffff1690602001909291905050506104ef565b005b610123610653565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101916004803603602081101561016557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610677565b005b6101e1600480360360408110156101a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610b71565b604051808481526020018367ffffffffffffffff1681526020018267ffffffffffffffff168152602001935050505060405180910390f35b61025b6004803603602081101561022f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d21565b604051808881526020018781526020018667ffffffffffffffff1681526020018567ffffffffffffffff168152602001848152602001838152602001821515815260200197505050505050505060405180910390f35b6102b9610d98565b005b6102f1600480360360208110156102d157600080fd5b81019080803567ffffffffffffffff169060200190929190505050611118565b005b6103356004803603602081101561030957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061127c565b005b61033f611657565b604051808267ffffffffffffffff16815260200191505060405180910390f35b610367611671565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6103fd6004803603608081101561039d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803567ffffffffffffffff169060200190929190803567ffffffffffffffff16906020019092919080351515906020019092919050505061168b565b604051808381526020018267ffffffffffffffff1681526020019250505060405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b6104ed611a0e565b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b80600760086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060405180807f636f6c6c61746572616c506169724d696e5477617054696d6500000000000000815250601901905060405180910390207f6293347933ad2997134e224ac8cd2e39908a4a22aeed9af52127b4bbf765297882604051808267ffffffffffffffff16815260200191505060405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f476f7665726e65643a20496e6974206e6f7420617574686f72697a65642e000081525060200191505060405180910390fd5b600560006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558073ffffffffffffffffffffffffffffffffffffffff167f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e660405160405180910390a2806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561084857600080fd5b505afa15801561085c573d6000803e3d6000fd5b505050506040513d602081101561087257600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166311df99956040518163ffffffff1660e01b815260040160206040518083038186803b15801561092957600080fd5b505afa15801561093d573d6000803e3d6000fd5b505050506040513d602081101561095357600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d478b0876040518163ffffffff1660e01b815260040160206040518083038186803b158015610a0a57600080fd5b505afa158015610a1e573d6000803e3d6000fd5b505050506040513d6020811015610a3457600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633fc8cef36040518163ffffffff1660e01b815260040160206040518083038186803b158015610aeb57600080fd5b505afa158015610aff573d6000803e3d6000fd5b505050506040513d6020811015610b1557600080fd5b8101908080519060200190929190505050600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b6e611a57565b50565b600080600084600960008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f496e76616c696420706169722e0000000000000000000000000000000000000081525060200191505060405180910390fd5b6000600860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806000015494508515610cdf578060050160009054906101000a900460ff16610cbe57610cb98160040154826003015487611a599092919063ffffffff16565b610cdc565b610cdb8160030154826004015487611a599092919063ffffffff16565b5b94505b848160020160009054906101000a900467ffffffffffffffff168260020160089054906101000a900467ffffffffffffffff1694509450945050509250925092565b60086020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900467ffffffffffffffff16908060020160089054906101000a900467ffffffffffffffff16908060030154908060040154908060050160009054906101000a900460ff16905087565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e59576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b600a60149054906101000a900460ff1615610e7357600080fd5b6001600a60146101000a81548160ff02191690831515021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637429d7dd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ef457600080fd5b505afa158015610f08573d6000803e3d6000fd5b505050506040513d6020811015610f1e57600080fd5b8101908080519060200190929190505050600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635a50aaf26040518163ffffffff1660e01b815260040160006040518083038186803b158015610fd757600080fd5b505afa158015610feb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561101557600080fd5b810190808051604051939291908464010000000082111561103557600080fd5b8382019150602082018581111561104b57600080fd5b825186602082028301116401000000008211171561106857600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561109f578082015181840152602081019050611084565b5050505090500160405250505090506110d9600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611b68565b60005b81518160ff16101561111457611107828260ff16815181106110fa57fe5b6020026020010151611b68565b80806001019150506110dc565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b80600760006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060405180807f7265666572656e6365506169724d696e5477617054696d650000000000000000815250601801905060405180910390207f6293347933ad2997134e224ac8cd2e39908a4a22aeed9af52127b4bbf765297882604051808267ffffffffffffffff16815260200191505060405180910390a250565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156112e657600080fd5b505af11580156112fa573d6000803e3d6000fd5b5050505060026006541415611377576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b50726f746f636f6c3a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b6002600681905550600460149054906101000a900460ff1615611402576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f476f7665726e65643a20436f6e74726163742069732073746f707065642e000081525060200191505060405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b15801561146857600080fd5b505afa15801561147c573d6000803e3d6000fd5b505050506040513d602081101561149257600080fd5b8101908080519060200190929190505050156114f9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612ff16028913960400191505060405180910390fd5b80600960008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166115b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f496e76616c696420706169722e0000000000000000000000000000000000000081525060200191505060405180910390fd5b6115c78260008060006120eb565b5050506001600681905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561163c57600080fd5b505af1158015611650573d6000803e3d6000fd5b5050505050565b600760009054906101000a900467ffffffffffffffff1681565b600760089054906101000a900467ffffffffffffffff1681565b60008060026006541415611707576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b436f6e74726163743a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b6002600681905550600460149054906101000a900460ff1615611792576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f476f7665726e65643a20436f6e74726163742069732073746f707065642e000081525060200191505060405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b1580156117f857600080fd5b505afa15801561180c573d6000803e3d6000fd5b505050506040513d602081101561182257600080fd5b810190808051906020019092919050505015611889576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612ff16028913960400191505060405180910390fd5b85600960008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611949576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f496e76616c696420706169722e0000000000000000000000000000000000000081525060200191505060405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663815c6c7b336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060006040518083038186803b1580156119d057600080fd5b505afa1580156119e4573d6000803e3d6000fd5b505050506119f4878787876120eb565b809350819450505050600160068190555094509492505050565b6001600460146101000a81548160ff0219169083151502179055507f7acc84e34091ae817647a4c49116f5cc07f319078ba80f8f5fde37ea7e25cbd660405160405180910390a1565b565b600080841480611a695750600083145b15611a775760009050611b61565b6000821415611aee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206469766973696f6e206279207a65726f2e000000000081525060200191505060405180910390fd5b828402905082848281611afd57fe5b0414611b54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612fcf6022913960400191505060405180910390fd5b818181611b5d57fe5b0490505b9392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015611bb157600080fd5b505afa158015611bc5573d6000803e3d6000fd5b505050506040513d6060811015611bdb57600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505050915091506000826dffffffffffffffffffffffffffff1614158015611c3757506000816dffffffffffffffffffffffffffff1614155b611ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f4e6f2072657365727665732e000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060008373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015611d4957600080fd5b505afa158015611d5d573d6000803e3d6000fd5b505050506040513d6020811015611d7357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015611dc957600080fd5b505afa158015611ddd573d6000803e3d6000fd5b505050506040513d6020811015611df357600080fd5b8101908080519060200190929190505050905060008473ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015611e4e57600080fd5b505afa158015611e62573d6000803e3d6000fd5b505050506040513d6020811015611e7857600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015611ece57600080fd5b505afa158015611ee2573d6000803e3d6000fd5b505050506040513d6020811015611ef857600080fd5b8101908080519060200190929190505050905060128260ff1611158015611f23575060128160ff1611155b611f95576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f546f6f206d616e7920646563696d616c732e000000000000000000000000000081525060200191505060405180910390fd5b6040518060e001604052806000815260200160008152602001600067ffffffffffffffff168152602001600067ffffffffffffffff1681526020018360120360ff16600a0a81526020018260120360ff16600a0a8152602001611ff78761269c565b1515815250600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060608201518160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506080820151816003015560a0820151816004015560c08201518160050160006101000a81548160ff0219169083151502179055509050505050505050565b6000806120f6612f7b565b600860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060e001604052908160008201548152602001600182015481526020016002820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016002820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff16151515158152505090506000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161461225c57600760009054906101000a900467ffffffffffffffff16612274565b600760089054906101000a900467ffffffffffffffff165b905060006122806128bf565b905060008360000151141580156122af57508767ffffffffffffffff16836060015167ffffffffffffffff1611155b80156122ef57506122d787846040015167ffffffffffffffff166128cf90919063ffffffff16565b67ffffffffffffffff168167ffffffffffffffff1611155b156123035782600001519450826040015193505b8067ffffffffffffffff1661232f83856040015167ffffffffffffffff166128cf90919063ffffffff16565b67ffffffffffffffff1610156126315760006123508a8560c001518461296b565b9050600084604001518303905060008167ffffffffffffffff16612381876020015185612bdd90919063ffffffff16565b8161238857fe5b0490506000811461251957600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168c73ffffffffffffffffffffffffffffffffffffffff1614156124f55760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b15801561244f57600080fd5b505afa158015612463573d6000803e3d6000fd5b505050506040513d602081101561247957600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663c2cb0288826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156124dc57600080fd5b505af11580156124f0573d6000803e3d6000fd5b505050505b8a67ffffffffffffffff168267ffffffffffffffff161015612518578097508396505b5b6000600860008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050818160000181905550838160010181905550848160020160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550828160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508c73ffffffffffffffffffffffffffffffffffffffff167f5484d7a2f04f94d6d62ceb044bcc5acb71686eae2a490f39dd1a3195ba7f4ea0838686604051808481526020018381526020018267ffffffffffffffff168152602001935050505060405180910390a2505050505b6000851415801561263f5750855b15612690578260c0015161266f5761266a8360a00151846080015187611a599092919063ffffffff16565b61268d565b61268c83608001518460a0015187611a599092919063ffffffff16565b5b94505b50505094509492505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561271d57600080fd5b505afa158015612731573d6000803e3d6000fd5b505050506040513d602081101561274757600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16149050806128ba57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156127f557600080fd5b505afa158015612809573d6000803e3d6000fd5b505050506040513d602081101561281f57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146128b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4d697373696e6720436f696e2e0000000000000000000000000000000000000081525060200191505060405180910390fd5b5b919050565b60006128ca42612c27565b905090565b60008082840190508367ffffffffffffffff168167ffffffffffffffff161015612961576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000826129f8578373ffffffffffffffffffffffffffffffffffffffff16635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b1580156129b857600080fd5b505afa1580156129cc573d6000803e3d6000fd5b505050506040513d60208110156129e257600080fd5b8101908080519060200190929190505050612a7a565b8373ffffffffffffffffffffffffffffffffffffffff16635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b158015612a3e57600080fd5b505afa158015612a52573d6000803e3d6000fd5b505050506040513d6020811015612a6857600080fd5b81019080805190602001909291905050505b905060008060008673ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015612ac757600080fd5b505afa158015612adb573d6000803e3d6000fd5b505050506040513d6060811015612af157600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505092506dffffffffffffffffffffffffffff1692506dffffffffffffffffffffffffffff1692508467ffffffffffffffff168163ffffffff1614612baf57612bac86612b7e578163ffffffff16860367ffffffffffffffff16612b788486612c92565b02612b9d565b8163ffffffff16860367ffffffffffffffff16612b9b8585612c92565b025b85612d2090919063ffffffff16565b93505b612bd16e01000000000000000000000000000085612da890919063ffffffff16565b93505050509392505050565b6000612c1f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612ebb565b905092915050565b6000680100000000000000008210612c8a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806130196026913960400191505060405180910390fd5b819050919050565b600080821415612d0a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4669786564506f696e743a204449565f42595f5a45524f00000000000000000081525060200191505060405180910390fd5b81607084901b81612d1757fe5b04905092915050565b600080828401905083811015612d9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600080831415612dbb5760009050612eb5565b6000821415612e32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206469766973696f6e206279207a65726f2e000000000081525060200191505060405180910390fd5b670de0b6b3a764000083029050670de0b6b3a7640000838281612e5157fe5b0414612ea8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612fcf6022913960400191505060405180910390fd5b818181612eb157fe5b0490505b92915050565b6000838311158290612f68576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612f2d578082015181840152602081019050612f12565b50505050905090810190601f168015612f5a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6040518060e001604052806000815260200160008152602001600067ffffffffffffffff168152602001600067ffffffffffffffff1681526020016000815260200160008152602001600015158152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f772e476f7665726e65643a204e6f7420617661696c61626c6520647572696e672073687574646f776e2e53616665436173743a2076616c756520646f65736e27742066697420696e2036342062697473a264697066735822122058406a465921cc87b7258cd7c2d0a9eafe09a4cc0a0cf5e1fe550a61b4533de764736f6c63430007040033";