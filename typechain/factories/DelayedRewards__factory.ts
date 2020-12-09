/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DelayedRewards } from "../DelayedRewards";

export class DelayedRewards__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DelayedRewards> {
    return super.deploy(overrides || {}) as Promise<DelayedRewards>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DelayedRewards {
    return super.attach(address) as DelayedRewards;
  }
  connect(signer: Signer): DelayedRewards__factory {
    return super.connect(signer) as DelayedRewards__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DelayedRewards {
    return new Contract(address, _abi, signerOrProvider) as DelayedRewards;
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
        internalType: "uint64",
        name: "period",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimedInstantly",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "period",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Stopped",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "periodsForward",
        type: "uint64",
      },
    ],
    name: "checkFutureRewards",
    outputs: [
      {
        internalType: "uint64[]",
        name: "periods",
        type: "uint64[]",
      },
      {
        internalType: "uint256",
        name: "totalRewards",
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
        internalType: "uint64",
        name: "periodsBack",
        type: "uint64",
      },
    ],
    name: "checkRewardsAvailable",
    outputs: [
      {
        internalType: "uint64[]",
        name: "periods",
        type: "uint64[]",
      },
      {
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "periods",
        type: "uint64[]",
      },
    ],
    name: "claimRewards",
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
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pendingRewards",
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
    inputs: [],
    name: "periodLength",
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
        name: "rewardTime",
        type: "uint64",
      },
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
    name: "registerRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardDelay",
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
        name: "_rewardDelay",
        type: "uint64",
      },
    ],
    name: "setRewardDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405262278d00600860006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055503480156200003d57600080fd5b50620151808067ffffffffffffffff1660011080156200006a57506301e285008167ffffffffffffffff16105b620000dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f54696d653a20496e76616c696420706572696f64206c656e6774682e0000000081525060200191505060405180910390fd5b60018167ffffffffffffffff16620000fa6200019b60201b60201c565b67ffffffffffffffff16816200010c57fe5b040367ffffffffffffffff1660a08167ffffffffffffffff1660c01b815250508067ffffffffffffffff1660808167ffffffffffffffff1660c01b815250505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160068190555062000225565b6000620001b342620001b860201b620012da1760201c565b905090565b60006801000000000000000082106200021d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180620022dd6026913960400191505060405180910390fd5b819050919050565b60805160c01c60a05160c01c61207a6200026360003980611000528061134952508061102152806111de52806112b8528061136a525061207a6000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063302fbf571161007657806370fe1ad11161005b57806370fe1ad1146101b3578063a568c5a7146101d1578063d2ca211514610201576100be565b8063302fbf571461016657806339a3220214610182576100be565b806319ab453c116100a757806319ab453c146101125780631e644f3d1461012e5780632568807e1461014a576100be565b80630c340a24146100c357806315afcaa2146100e1575b600080fd5b6100cb61021f565b6040516100d89190611d62565b60405180910390f35b6100fb60048036038101906100f6919061195e565b610243565b604051610109929190611d32565b60405180910390f35b61012c60048036038101906101279190611a04565b6102a8565b005b6101486004803603810190610143919061199a565b6107a2565b005b610164600480360381019061015f9190611a7f565b610b56565b005b610180600480360381019061017b9190611ae4565b610c8e565b005b61019c6004803603810190610197919061195e565b6111c4565b6040516101aa929190611d32565b60405180910390f35b6101bb611277565b6040516101c89190611df8565b60405180910390f35b6101eb60048036038101906101e69190611aa8565b611291565b6040516101f89190611ddd565b60405180910390f35b6102096112b6565b6040516102169190611df8565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080610250611345565b90506000808567ffffffffffffffff161461028757610282858367ffffffffffffffff166113b390919063ffffffff16565b61028a565b60005b90506102978682846113fd565b809450819550505050509250929050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461036b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f476f7665726e65643a20496e6974206e6f7420617574686f72697a65642e000081525060200191505060405180910390fd5b600560006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558073ffffffffffffffffffffffffffffffffffffffff167f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e660405160405180910390a2806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561047957600080fd5b505afa15801561048d573d6000803e3d6000fd5b505050506040513d60208110156104a357600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166311df99956040518163ffffffff1660e01b815260040160206040518083038186803b15801561055a57600080fd5b505afa15801561056e573d6000803e3d6000fd5b505050506040513d602081101561058457600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d478b0876040518163ffffffff1660e01b815260040160206040518083038186803b15801561063b57600080fd5b505afa15801561064f573d6000803e3d6000fd5b505050506040513d602081101561066557600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633fc8cef36040518163ffffffff1660e01b815260040160206040518083038186803b15801561071c57600080fd5b505afa158015610730573d6000803e3d6000fd5b505050506040513d602081101561074657600080fd5b8101908080519060200190929190505050600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061079f61163e565b50565b6002600654141561081b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b436f6e74726163743a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b6002600681905550600061082d611345565b90506000803390506000808551905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bf86d6906040518163ffffffff1660e01b815260040160206040518083038186803b1580156108a557600080fd5b505afa1580156108b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dd91906119db565b905060005b82811015610a1a578781815181106108f657fe5b602002602001015195508115801561092157508667ffffffffffffffff168667ffffffffffffffff16115b1561092b57610a0d565b6109a2600760008867ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548561164090919063ffffffff16565b9350600760008767ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090555b80806001019150506108e2565b506000831415610a5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5690611d9d565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a99acb1785856040518363ffffffff1660e01b8152600401610aba929190611d09565b600060405180830381600087803b158015610ad457600080fd5b505af1158015610ae8573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff168667ffffffffffffffff167ffff3d9821e89591725804007b3d7480cc9e6471ffaea3979d62afba3dbdd75f185604051610b3d9190611ddd565b60405180910390a3505050505050600160068190555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c17576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b80600860006101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550604051610c4c90611cf4565b60405180910390207f6293347933ad2997134e224ac8cd2e39908a4a22aeed9af52127b4bbf765297882604051610c839190611df8565b60405180910390a250565b60026006541415610d07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b436f6e74726163743a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b600260068190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166380f556056040518163ffffffff1660e01b815260040160206040518083038186803b158015610d7557600080fd5b505afa158015610d89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dad9190611a2d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610eae575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639ec5a8946040518163ffffffff1660e01b815260040160206040518083038186803b158015610e4757600080fd5b505afa158015610e5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7f9190611a56565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610eed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee490611d7d565b60405180910390fd5b6000600860009054906101000a900467ffffffffffffffff16905060008167ffffffffffffffff161415610ffc5760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a99acb1784846040518363ffffffff1660e01b8152600401610f76929190611d09565b600060405180830381600087803b158015610f9057600080fd5b505af1158015610fa4573d6000803e3d6000fd5b505050508273ffffffffffffffffffffffffffffffffffffffff167fa5bc5ae89ac3812b5cbcf37f574e6226c168a90ca5f3285edf238740259f276483604051610fee9190611ddd565b60405180910390a2506111b7565b60007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000067ffffffffffffffff16611067848867ffffffffffffffff166116c890919063ffffffff16565b67ffffffffffffffff168161107857fe5b040390506110f383600760008467ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461164090919063ffffffff16565b600760008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168167ffffffffffffffff167f41e5d9e3fe88f27fc38691e2ef4f85304b6ba6094720df914bb5a6a971b1e0c1856040516111ac9190611ddd565b60405180910390a350505b6001600681905550505050565b60606000808367ffffffffffffffff1614156112345760017f000000000000000000000000000000000000000000000000000000000000000067ffffffffffffffff16600860009054906101000a900467ffffffffffffffff1667ffffffffffffffff168161122f57fe5b040192505b600061123e611345565b90506112678582611262878567ffffffffffffffff166116c890919063ffffffff16565b6113fd565b8093508194505050509250929050565b600860009054906101000a900467ffffffffffffffff1681565b6007602052816000526040600020602052806000526040600020600091509150505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600068010000000000000000821061133d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061201f6026913960400191505060405180910390fd5b819050919050565b60007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000067ffffffffffffffff1661139b611764565b67ffffffffffffffff16816113ac57fe5b0403905090565b60006113f583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611774565b905092915050565b606060008267ffffffffffffffff168467ffffffffffffffff1610611457576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144e90611dbd565b60405180910390fd5b6000808590505b8467ffffffffffffffff168167ffffffffffffffff16116114fb576000600760008367ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146114ee5781806001019250505b808060010191505061145e565b508067ffffffffffffffff8111801561151357600080fd5b506040519080825280602002602001820160405280156115425781602001602082028036833780820191505090505b50925060008060008790505b8667ffffffffffffffff168167ffffffffffffffff161161163257600760008267ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915060008214611625576115eb828661164090919063ffffffff16565b9450808684815181106115fa57fe5b602002602001019067ffffffffffffffff16908167ffffffffffffffff168152505082806001019350505b808060010191505061154e565b50505050935093915050565b565b6000808284019050838110156116be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008082840190508367ffffffffffffffff168167ffffffffffffffff16101561175a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600061176f426112da565b905090565b60008367ffffffffffffffff168367ffffffffffffffff1611158290611835576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117fa5780820151818401526020810190506117df565b50505050905090810190601f1680156118275780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008135905061185781611f7d565b92915050565b600082601f83011261186e57600080fd5b813561188161187c82611e44565b611e13565b915081818352602084019350602081019050838560208402820111156118a657600080fd5b60005b838110156118d657816118bc8882611949565b8452602084019350602083019250506001810190506118a9565b5050505092915050565b6000815190506118ef81611f94565b92915050565b60008135905061190481611fab565b92915050565b60008151905061191981611fc2565b92915050565b60008151905061192e81611fd9565b92915050565b60008135905061194381611ff0565b92915050565b60008135905061195881612007565b92915050565b6000806040838503121561197157600080fd5b600061197f85828601611848565b925050602061199085828601611949565b9150509250929050565b6000602082840312156119ac57600080fd5b600082013567ffffffffffffffff8111156119c657600080fd5b6119d28482850161185d565b91505092915050565b6000602082840312156119ed57600080fd5b60006119fb848285016118e0565b91505092915050565b600060208284031215611a1657600080fd5b6000611a24848285016118f5565b91505092915050565b600060208284031215611a3f57600080fd5b6000611a4d8482850161190a565b91505092915050565b600060208284031215611a6857600080fd5b6000611a768482850161191f565b91505092915050565b600060208284031215611a9157600080fd5b6000611a9f84828501611949565b91505092915050565b60008060408385031215611abb57600080fd5b6000611ac985828601611949565b9250506020611ada85828601611848565b9150509250929050565b600080600060608486031215611af957600080fd5b6000611b0786828701611949565b9350506020611b1886828701611848565b9250506040611b2986828701611934565b9150509250925092565b6000611b3f8383611cd6565b60208301905092915050565b611b5481611ec5565b82525050565b6000611b6582611e80565b611b6f8185611e98565b9350611b7a83611e70565b8060005b83811015611bab578151611b928882611b33565b9750611b9d83611e8b565b925050600181019050611b7e565b5085935050505092915050565b611bc181611f57565b82525050565b6000611bd4600b83611eba565b91507f72657761726444656c61790000000000000000000000000000000000000000006000830152600b82019050919050565b6000611c14600f83611ea9565b91507f4e6f7420417574686f72697a65642e00000000000000000000000000000000006000830152602082019050919050565b6000611c54600b83611ea9565b91507f4e6f20726577617264732e0000000000000000000000000000000000000000006000830152602082019050919050565b6000611c94600d83611ea9565b91507f506572696f64206572726f722e000000000000000000000000000000000000006000830152602082019050919050565b611cd081611f39565b82525050565b611cdf81611f43565b82525050565b611cee81611f43565b82525050565b6000611cff82611bc7565b9150819050919050565b6000604082019050611d1e6000830185611b4b565b611d2b6020830184611cc7565b9392505050565b60006040820190508181036000830152611d4c8185611b5a565b9050611d5b6020830184611cc7565b9392505050565b6000602082019050611d776000830184611bb8565b92915050565b60006020820190508181036000830152611d9681611c07565b9050919050565b60006020820190508181036000830152611db681611c47565b9050919050565b60006020820190508181036000830152611dd681611c87565b9050919050565b6000602082019050611df26000830184611cc7565b92915050565b6000602082019050611e0d6000830184611ce5565b92915050565b6000604051905081810181811067ffffffffffffffff82111715611e3a57611e39611f7b565b5b8060405250919050565b600067ffffffffffffffff821115611e5f57611e5e611f7b565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611ed082611f19565b9050919050565b60008115159050919050565b6000611eee82611ec5565b9050919050565b6000611f0082611ec5565b9050919050565b6000611f1282611ec5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000611f6282611f69565b9050919050565b6000611f7482611f19565b9050919050565bfe5b611f8681611ec5565b8114611f9157600080fd5b50565b611f9d81611ed7565b8114611fa857600080fd5b50565b611fb481611ee3565b8114611fbf57600080fd5b50565b611fcb81611ef5565b8114611fd657600080fd5b50565b611fe281611f07565b8114611fed57600080fd5b50565b611ff981611f39565b811461200457600080fd5b50565b61201081611f43565b811461201b57600080fd5b5056fe53616665436173743a2076616c756520646f65736e27742066697420696e2036342062697473a2646970667358221220ebfe81307e08762dfbe656e320688b2f10623b9257769a7465d3d666aa0fefa264736f6c6343000704003353616665436173743a2076616c756520646f65736e27742066697420696e2036342062697473";
