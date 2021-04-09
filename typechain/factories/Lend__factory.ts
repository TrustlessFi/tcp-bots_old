/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Lend } from "../Lend";

export class Lend__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lend> {
    return super.deploy(overrides || {}) as Promise<Lend>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lend {
    return super.attach(address) as Lend;
  }
  connect(signer: Signer): Lend__factory {
    return super.connect(signer) as Lend__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lend {
    return new Contract(address, _abi, signerOrProvider) as Lend;
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coinCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lendTokenCount",
        type: "uint256",
      },
    ],
    name: "Lend",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "MintCoin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "OneToOneMintingDisabled",
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
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "paramName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "ParameterUpdatedAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "ReturnCoin",
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
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coinCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lendTokenCount",
        type: "uint256",
      },
    ],
    name: "Unlend",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "pool",
        type: "address",
      },
    ],
    name: "addReferencePool",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "countTokensAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "currentToken",
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
        internalType: "uint256",
        name: "coinCount",
        type: "uint256",
      },
    ],
    name: "lend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRatioOfTotalDebtAllowed",
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
        internalType: "contract IERC20",
        name: "tokenToDeposit",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "coinToMint",
        type: "uint256",
      },
    ],
    name: "mintCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "pool",
        type: "address",
      },
    ],
    name: "removeReferencePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenToRecieve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "coinToReturn",
        type: "uint256",
      },
    ],
    name: "returnCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ratio",
        type: "uint256",
      },
    ],
    name: "setMaxRatioOfTotalDebtAllowed",
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
    inputs: [
      {
        internalType: "uint256",
        name: "lendTokenCount",
        type: "uint256",
      },
    ],
    name: "unlend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "validToken",
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
    inputs: [
      {
        internalType: "bytes4",
        name: "",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lendTokenCount",
        type: "uint256",
      },
    ],
    name: "valueOfLendTokensInCoin",
    outputs: [
      {
        internalType: "uint256",
        name: "coinCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600160066000509090556012600760146101000a81548160ff021916908360ff16021790555067058d15e17628000060086000509090553480156100485760006000fd5b505b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b610091565b61314b806100a06000396000f3fe60806040523480156100115760006000fd5b50600436106101565760003560e01c806387001ad2116100ce578063c6e225d611610082578063d284433b11610067578063d284433b146104e8578063d5f3948814610543578063ec1553d11461057757610156565b8063c6e225d61461043e578063d0b3d2c51461049957610156565b80639c98058d116100b35780639c98058d146103ac578063a6aa57ce146103ca578063c381c1e6146103f957610156565b806387001ad2146103735780638aea8f71146103a257610156565b8063197b1bf5116101255780631b2b32451161010a5780631b2b3245146102b757806365ab9699146102fa57806375f12b211461035357610156565b8063197b1bf51461024357806319ab453c1461027257610156565b806307da68f51461015c5780630c340a2414610166578063113cf1ab1461019a578063150147d7146101fe57610156565b60006000fd5b6101646105c6565b005b61016e6105e6565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101e6600480360360208110156101b15760006000fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061060c565b60405180821515815260200191505060405180910390f35b610241600480360360208110156102155760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610631565b005b6102706004803603602081101561025a5760006000fd5b81019080803590602001909291905050506106cf565b005b6102b5600480360360208110156102895760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108d5565b005b6102e4600480360360208110156102ce5760006000fd5b8101908080359060200190929190505050610c93565b6040518082815260200191505060405180910390f35b61033d600480360360208110156103115760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cbf565b6040518082815260200191505060405180910390f35b61035b610df5565b60405180821515815260200191505060405180910390f35b6103a06004803603602081101561038a5760006000fd5b8101908080359060200190929190505050610e08565b005b6103aa610eaf565b005b6103b4611050565b6040518082815260200191505060405180910390f35b6103f7600480360360208110156103e15760006000fd5b8101908080359060200190929190505050611059565b005b61043c600480360360208110156104105760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e7565b005b610481600480360360208110156104555760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611485565b60405180821515815260200191505060405180910390f35b6104e6600480360360408110156104b05760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114aa565b005b61052b600480360360208110156104ff5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611886565b60405180821515815260200191505060405180910390f35b61054b6118ab565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105c46004803603604081101561058e5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118d1565b005b6105d4611f1663ffffffff16565b6105e2611fab63ffffffff16565b5b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560005060205280600052604060002060009150909054906101000a900460ff1681565b61063f611f1663ffffffff16565b61064e81611ff563ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff1660405180807f72656d6f76655265666572656e6365506f6f6c00000000000000000000000000815260200150601301905060405180910390207f78caada2f560033c9479d8c5e33f045f2e611faebe6b6d8a73874c80ec2dd3a260405160405180910390a35b5b50565b6106dd61206863ffffffff16565b6106eb61214763ffffffff16565b6106fd6000821161219c63ffffffff16565b600061070e82610c9363ffffffff16565b9050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166379cc679033846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156107a45760006000fd5b505af11580156107b9573d600060003e3d6000fd5b50505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663db795bca33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156108515760006000fd5b505af1158015610866573d600060003e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167fefc56a1a7590fc4eb13cd40b6a2ceee41f3869c6ea818d20d9a18f2d6315ca188284604051808381526020018281526020019250505060405180910390a2505b5b6108d161221863ffffffff16565b5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109325760006000fd5b600160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905580600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a015760006000fd5b505afa158015610a16573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3a9190612f0d565b600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166311df99956040518163ffffffff1660e01b815260040160206040518083038186803b158015610ae35760006000fd5b505afa158015610af8573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1c9190612f34565b600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d478b0876040518163ffffffff1660e01b815260040160206040518083038186803b158015610bc55760006000fd5b505afa158015610bda573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfe9190612f5b565b600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610c4c6122ac63ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e660405160405180910390a25b50565b6000610cb5610ca661240963ffffffff16565b836125e190919063ffffffff16565b905080505b919050565b600081610d20600960005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661260763ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff166370a08231600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610daa5760006000fd5b505afa158015610dbf573d600060003e3d6000fd5b505050506040513d6020811015610dd65760006000fd5b81019080805190602001909291905050509150610dee565b5b50919050565b600060149054906101000a900460ff1681565b610e16611f1663ffffffff16565b670de0b6b3a76400008111151515610e2e5760006000fd5b80600860005081909090555060405180807f6d6178526174696f4f66546f74616c44656274416c6c6f776564000000000000815260200150601a01905060405180910390207f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b920933826040518082815260200191505060405180910390a25b5b50565b610ebd611f1663ffffffff16565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ab658be26040518163ffffffff1660e01b815260040160006040518083038186803b158015610f285760006000fd5b505afa158015610f3d573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610f685760006000fd5b8101908080516040519392919084640100000000821115610f895760006000fd5b83820191506020820185811115610fa05760006000fd5b8251866020820283011164010000000082111715610fbe5760006000fd5b8083526020830192505050908051906020019060200280838360005b83811015610ff65780820151818401525b602081019050610fda565b5050505090500160405260200150505090506000600090505b815181101561104a5761103c828281518110151561102957fe5b602002602001015161268363ffffffff16565b5b808060010191505061100f565b50505b5b565b60086000505481565b61106761206863ffffffff16565b61107561275163ffffffff16565b6110876000821161219c63ffffffff16565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b1580156110f05760006000fd5b505afa158015611105573d600060003e3d6000fd5b505050506040513d602081101561111c5760006000fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663a6afed956040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156111755760006000fd5b505af115801561118a573d600060003e3d6000fd5b5050505060006111b06111a161240963ffffffff16565b8361288a90919063ffffffff16565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156112865760006000fd5b505af115801561129b573d600060003e3d6000fd5b505050506040513d60208110156112b25760006000fd5b810190808051906020019092919050505015156112cf5760006000fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663449a52f833836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156113635760006000fd5b505af1158015611378573d600060003e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167f8fff79b574da9a93d7a5408c2fc00c4a9b2b462321c1659b2fbbb9ff3dd221ff8383604051808381526020018281526020019250505060405180910390a2505b5b6113e361221863ffffffff16565b5b50565b6113f5611f1663ffffffff16565b6114048161268363ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff1660405180807f6164645265666572656e6365506f6f6c00000000000000000000000000000000815260200150601001905060405180910390207f78caada2f560033c9479d8c5e33f045f2e611faebe6b6d8a73874c80ec2dd3a260405160405180910390a35b5b50565b600960005060205280600052604060002060009150909054906101000a900460ff1681565b6114b861206863ffffffff16565b6114c661275163ffffffff16565b81611525600960005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661260763ffffffff16565b6115376000831161219c63ffffffff16565b6000339050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166393bc393661163285600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637902a56e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156115e75760006000fd5b505afa1580156115fc573d600060003e3d6000fd5b505050506040513d60208110156116135760006000fd5b81019080805190602001909291905050506128b090919063ffffffff16565b6040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156116695760006000fd5b505af115801561167e573d600060003e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166379cc679082856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156117165760006000fd5b505af115801561172b573d600060003e3d6000fd5b50505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663748c03d4858361177f888861293963ffffffff16565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1580156117f05760006000fd5b505af1158015611805573d600060003e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fa1ab9f9b61c23a19e72a91132be935f6bb41354f8b1fccc6b0c78bbdadfe3c41856040518082815260200191505060405180910390a3505b5b505b61188161221863ffffffff16565b5b5050565b600a60005060205280600052604060002060009150909054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6118df61206863ffffffff16565b6118ed61275163ffffffff16565b60038060ff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663055ad42e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561195c5760006000fd5b505afa158015611971573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119959190612f82565b60ff161015156119da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119d190612fef565b60405180910390fd5b82611a39600a60005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661260763ffffffff16565b611a4b6000841161219c63ffffffff16565b6000611b0584600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637902a56e6040518163ffffffff1660e01b815260040160206040518083038186803b158015611aba5760006000fd5b505afa158015611acf573d600060003e3d6000fd5b505050506040513d6020811015611ae65760006000fd5b8101908080519060200190929190505050612a6790919063ffffffff16565b90506000611bc185600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630dca59c16040518163ffffffff1660e01b815260040160206040518083038186803b158015611b765760006000fd5b505afa158015611b8b573d600060003e3d6000fd5b505050506040513d6020811015611ba25760006000fd5b8101908080519060200190929190505050612a6790919063ffffffff16565b9050600860005054611bdc82846125e190919063ffffffff16565b11151515611c55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4d617820706f7274696f6e206f6620646562742065786365656465640000000081526020015060200191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166393bc3936836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611ccb5760006000fd5b505af1158015611ce0573d600060003e3d6000fd5b5050505060003390508673ffffffffffffffffffffffffffffffffffffffff166323b872dd82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611d398b8b61293963ffffffff16565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611daa5760006000fd5b505af1158015611dbf573d600060003e3d6000fd5b505050506040513d6020811015611dd65760006000fd5b810190808051906020019092919050505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663449a52f882886040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015611e7c5760006000fd5b505af1158015611e91573d600060003e3d6000fd5b505050508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167feb4507052da267ce988981e17847cae48ec777eb8385fe388416934c52480ba2886040518082815260200191505060405180910390a35050505b5b505b505b611f1161221863ffffffff16565b5b5050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611fa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f9f9061302e565b60405180910390fd5b5b565b6001600060146101000a81548160ff0219169083151502179055507f7acc84e34091ae817647a4c49116f5cc07f319078ba80f8f5fde37ea7e25cbd660405160405180910390a15b565b600061200682612af063ffffffff16565b90506000600a60005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156120d35760006000fd5b505af11580156120e8573d600060003e3d6000fd5b50505050600260066000505414151515612137576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161212e9061306d565b60405180910390fd5b600260066000508190909055505b565b600060149054906101000a900460ff16151515612199576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612190906130ac565b60405180910390fd5b5b565b801515612214576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260048152602001807f4e6f6f700000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b60016006600050819090905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156122905760006000fd5b505af11580156122a5573d600060003e3d6000fd5b505050505b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba2481d16040518163ffffffff1660e01b815260040160206040518083038186803b1580156123155760006000fd5b505afa15801561232a573d600060003e3d6000fd5b505050506040513d60208110156123415760006000fd5b8101908080519060200190929190505050600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560005060006387001ad260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b565b60006000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156124b95760006000fd5b505afa1580156124ce573d600060003e3d6000fd5b505050506040513d60208110156124e55760006000fd5b810190808051906020019092919050505090506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156125635760006000fd5b505afa158015612578573d600060003e3d6000fd5b505050506040513d602081101561258f5760006000fd5b8101908080519060200190929190505050905060008114806125b15750600082145b6125cd576125c882826125e190919063ffffffff16565b6125d7565b670de0b6b3a76400005b9250825050505b90565b60006125fc83670de0b6b3a764000084612d3d63ffffffff16565b905080505b92915050565b80151561267f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f496e76616c696420746f6b656e0000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b50565b600061269482612af063ffffffff16565b90506001600a60005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600960005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505b50565b600060149054906101000a900460ff161515156127a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161279a906130ac565b60405180910390fd5b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b15801561280c5760006000fd5b505afa158015612821573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128459190612ee0565b151515612887576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161287e90612fb0565b60405180910390fd5b5b565b60006128a58383670de0b6b3a7640000612d3d63ffffffff16565b905080505b92915050565b60008282840391508111151515612932576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f7375622d756e646572666c6f770000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600060008373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156129845760006000fd5b505afa158015612999573d600060003e3d6000fd5b505050506040513d60208110156129b05760006000fd5b81019080805190602001909291905050509050600760149054906101000a900460ff1660ff168160ff1614156129e95782915050612a61565b600760149054906101000a900460ff1660ff168160ff1611612a2d5780600760149054906101000a900460ff160360ff16600a0a83811515612a2757fe5b04612a58565b612a57600760149054906101000a900460ff16820360ff16600a0a84612e3e90919063ffffffff16565b5b915050612a6156505b92915050565b60008282840191508110151515612ae9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6164642d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b92915050565b600060008273ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015612b3b5760006000fd5b505afa158015612b50573d600060003e3d6000fd5b505050506040513d6020811015612b675760006000fd5b8101908080519060200190929190505050905060008373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015612bc35760006000fd5b505afa158015612bd8573d600060003e3d6000fd5b505050506040513d6020811015612bef5760006000fd5b81019080805190602001909291905050509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515612d2c5781818093508192505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515612d2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f4d697373696e6720636f696e000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b8092505050612d385650505b919050565b6000600060006000198587098587029250828110838203039150506000811415612d8057600084111515612d715760006000fd5b83820492508292505050612e37565b8084111515612d8f5760006000fd5b6000848688099050828111820391508083039250600085866000031690508086049550808404935060018182600003040190508083028417935083506000600287600302189050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808502955085508595505050505050612e375650505050505b9392505050565b60006000821480612e5e57508282838502925082811515612e5b57fe5b04145b1515612ed5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6d756c2d6f766572666c6f77000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b5b9291505056613114565b600060208284031215612ef1578081fd5b815180151581141515612f02578182fd5b809150505b92915050565b600060208284031215612f1e578081fd5b8151612f29816130eb565b809150505b92915050565b600060208284031215612f45578081fd5b8151612f50816130eb565b809150505b92915050565b600060208284031215612f6c578081fd5b8151612f77816130eb565b809150505b92915050565b600060208284031215612f93578081fd5b815160ff811681141515612fa5578182fd5b809150505b92915050565b600060208252601160208301527f50726f746f636f6c2073687574646f776e00000000000000000000000000000060408301526060820190505b919050565b600060208252601460208301527f416374696f6e2077696e646f772070617373656400000000000000000000000060408301526060820190505b919050565b600060208252600e60208301527f4e6f7420417574686f72697a656400000000000000000000000000000000000060408301526060820190505b919050565b600060208252600d60208301527f4c50205265656e7472616e63790000000000000000000000000000000000000060408301526060820190505b919050565b600060208252601360208301527f436f6e74726163742069732073746f707065640000000000000000000000000060408301526060820190505b919050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156131105760006000fd5b5b50565bfea2646970667358221220735a4e6f226ddcfaecfabe220c198539a6d14d35e60553eb2960fbea4bfba12f64736f6c63430007060033";