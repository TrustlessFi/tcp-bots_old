/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { NonfungibleTokenPositionDescriptor } from "./NonfungibleTokenPositionDescriptor";

export class NonfungibleTokenPositionDescriptorFactory extends ContractFactory {
  constructor(
    linkLibraryAddresses: NonfungibleTokenPositionDescriptorLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      NonfungibleTokenPositionDescriptorFactory.linkBytecode(
        linkLibraryAddresses
      ),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: NonfungibleTokenPositionDescriptorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$28ca7891a259b174646586e2ff5520b353\\$__", "g"),
      linkLibraryAddresses["__$28ca7891a259b174646586e2ff5520b353$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _WETH9: string,
    overrides?: Overrides
  ): Promise<NonfungibleTokenPositionDescriptor> {
    return super.deploy(
      _WETH9,
      overrides || {}
    ) as Promise<NonfungibleTokenPositionDescriptor>;
  }
  getDeployTransaction(
    _WETH9: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_WETH9, overrides || {});
  }
  attach(address: string): NonfungibleTokenPositionDescriptor {
    return super.attach(address) as NonfungibleTokenPositionDescriptor;
  }
  connect(signer: Signer): NonfungibleTokenPositionDescriptorFactory {
    return super.connect(signer) as NonfungibleTokenPositionDescriptorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NonfungibleTokenPositionDescriptor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NonfungibleTokenPositionDescriptor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
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
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "flipRatio",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "tokenRatioPriority",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "positionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
];

const _bytecode =
  "0x60a06040523480156100115760006000fd5b50604051611a88380380611a8883398181016040528101906100339190610079565b5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815260140150505b506100ae566100ad565b60006020828403121561008a578081fd5b81516001600160a01b038116811415156100a2578182fd5b809150505b92915050565b5b60805160601c6119ae6100da60003980610107528061015e52806106a6528061074c52506119ae6000f3fe60806040523480156100115760006000fd5b50600436106100515760003560e01c80634aa4a4fc146100575780637e5af771146100755780639d7b0ea8146100a5578063e9dc6375146100d557610051565b60006000fd5b61005f610105565b60405161006c9190611748565b60405180910390f35b61008f600480360381019061008a9190611385565b610129565b60405161009c9190611770565b60405180910390f35b6100bf60048036038101906100ba91906113ca565b61015a565b6040516100cc9190611784565b60405180910390f35b6100ef60048036038101906100ea91906113fb565b6103e6565b6040516100fc9190611796565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b600061013b838361015a63ffffffff16565b61014b858461015a63ffffffff16565b139050610153565b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156101d8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c90506103e0565b60018214156103d75773a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102375761012c90506103e0566103d6565b73dac17f958d2ee523a2206206994597c13d831ec773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561028c5760c890506103e0566103d5565b736b175474e89094c44da98b954eedeac495271d0f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102e157606490506103e0566103d4565b738daebade922df735c38c80c7ebd708af50815faa73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610355577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3890506103e0566103d3565b732260fac5e5542a773aa44fbcfedf7c193bc2c59973ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103c9577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed490506103e0566103d2565b600090506103e0565b5b5b5b5b5b600090506103e0565b92915050565b6060600060006000600060008773ffffffffffffffffffffffffffffffffffffffff166399fbab88886040518263ffffffff1660e01b815260040161042b9190611907565b6101806040518083038186803b1580156104455760006000fd5b505afa15801561045a573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047e91906115c6565b5050505050965096509650965096505050600061056e8973ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b1580156104db5760006000fd5b505afa1580156104f0573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610514919061135e565b60405180606001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018762ffffff16815260200150610a6763ffffffff16565b905060006105908787610585610b5063ffffffff16565b61012963ffffffff16565b9050600081156105a057876105a2565b865b9050600082156105b257876105b4565b885b905060008473ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156105ff5760006000fd5b505afa158015610614573d600060003e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610638919061150c565b505050505091505073__$28ca7891a259b174646586e2ff5520b353$__63c49917d7604051806101c001604052808f81526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161461070b5761070687610b5963ffffffff16565b610745565b6040518060400160405280600381526020017f45544800000000000000000000000000000000000000000000000000000000008152602001505b81526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146107b1576107ac86610b5963ffffffff16565b6107eb565b6040518060400160405280600381526020017f45544800000000000000000000000000000000000000000000000000000000008152602001505b81526020018673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156108375760006000fd5b505afa15801561084c573d600060003e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087091906115a3565b60ff1681526020018573ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156108bf5760006000fd5b505afa1580156108d4573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f891906115a3565b60ff16815260200187151581526020018a60020b81526020018960020b81526020018460020b81526020018873ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561096a5760006000fd5b505afa15801561097f573d600060003e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a3919061142c565b60020b81526020018b62ffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff168152602001506040518263ffffffff1660e01b81526004016109ef91906117b2565b60006040518083038186803b158015610a085760006000fd5b505af4158015610a1d573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610a46919061144f565b9a5050505050505050505050610a6156505050505050505050505b92915050565b60008273ffffffffffffffffffffffffffffffffffffffff16631698ee828360000151846020015185604001516040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018262ffffff168152602001935050505060206040518083038186803b158015610b085760006000fd5b505afa158015610b1d573d600060003e3d6000fd5b505050506040513d6020811015610b345760006000fd5b8101908080519060200190929190505050905080505b92915050565b60004690505b90565b60606000610b74836395d89b4160e01b610ba663ffffffff16565b9050600081511415610b9757610b8f83610e5963ffffffff16565b915050610ba1565b80915050610ba156505b919050565b6060600060008473ffffffffffffffffffffffffffffffffffffffff1684604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083101515610c5d57805182525b602082019150602081019050602083039250610c37565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610cbd576040519150601f19603f3d011682016040523d82523d6000602084013e610cc2565b606091505b5091509150811580610cd5575060008151145b15610cf6576040518060200160405280600081526020015092505050610e53565b602081511415610d49576000818060200190516020811015610d185760006000fd5b81019080805190602001909291905050509050610d3a81610e7863ffffffff16565b9350505050610e535650610e35565b604081511115610e3457808060200190516020811015610d695760006000fd5b8101908080516040519392919084640100000000821115610d8a5760006000fd5b83820191506020820185811115610da15760006000fd5b8251866001820283011164010000000082111715610dbf5760006000fd5b8083526020830192505050908051906020019080838360005b83811015610df45780820151818401525b602081019050610dd8565b50505050905090810190601f168015610e215780820380516001836020036101000a031916815260200191505b5060405260200150505092505050610e53565b5b6040518060200160405280600081526020015092505050610e535650505b92915050565b6060610e6c82600661105463ffffffff16565b9050610e73565b919050565b60606000602067ffffffffffffffff81118015610e955760006000fd5b506040519080825280601f01601f191660200182016040528015610ec85781602001600182028036833780820191505090505b5090506000600090506000600090505b6020811015610f7c5760008582602081101515610ef157fe5b1a60f81b9050600060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515610f6d57808484815181101515610f3557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082806001019350505b505b8080600101915050610ed8565b5060008167ffffffffffffffff81118015610f975760006000fd5b506040519080825280601f01601f191660200182016040528015610fca5781602001600182028036833780820191505090505b5090506000600090505b82811015611040578381815181101515610fea57fe5b602001015160f81c60f81b828281518110151561100357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b8080600101915050610fd4565b5080935050505061104f565050505b919050565b6060600060028381151561106457fe5b061480156110725750600082115b801561107f575060288211155b15156110f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f41646472657373537472696e675574696c3a20494e56414c49445f4c454e000081526020015060200191505060405180910390fd5b60008267ffffffffffffffff811180156111105760006000fd5b506040519080825280601f01601f1916602001820160405280156111435781602001600182028036833780820191505090505b50905060008473ffffffffffffffffffffffffffffffffffffffff1690506000600090505b60028581151561117457fe5b048110156112565760008160130360080283901c9050600060048260ff16901c9050600060048260ff16901b830390506111b38261126963ffffffff16565b86856002028151811015156111c457fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506112028161126963ffffffff16565b866001866002020181518110151561121657fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505050505b8080600101915050611168565b5081925050506112635650505b92915050565b6000600a8260ff161015611289576030820160f81b905061129856611297565b6037820160f81b9050611298565b5b91905056611977565b6000815190506112b08161194e565b5b919050565b6000815190508060020b811415156112ce5760006000fd5b5b919050565b6000815190506fffffffffffffffffffffffffffffffff8116811415156112fb5760006000fd5b5b919050565b60008151905061ffff81168114151561131a5760006000fd5b5b919050565b60008151905062ffffff81168114151561133a5760006000fd5b5b919050565b60008151905060ff8116811415156113585760006000fd5b5b919050565b60006020828403121561136f578081fd5b815161137a8161194e565b809150505b92915050565b6000600060006060848603121561139a578182fd5b83356113a58161194e565b8093505060208401356113b78161194e565b80925050604084013590505b9250925092565b60006000604083850312156113dd578182fd5b82356113e88161194e565b80925050602083013590505b9250929050565b600060006040838503121561140e578182fd5b82356114198161194e565b80925050602083013590505b9250929050565b60006020828403121561143d578081fd5b611446826112b6565b90505b92915050565b600060208284031215611460578081fd5b815167ffffffffffffffff80821115611477578283fd5b818401915084601f830112151561148c578283fd5b81518181111561149857fe5b60405160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011682010181811084821117156114d457fe5b80604052508181528660208386010111156114ed578485fd5b6114fe826020830160208701611919565b809450505050505b92915050565b600060006000600060006000600060e0888a031215611529578283fd5b87516115348161194e565b80975050611544602089016112b6565b955061155260408901611301565b945061156060608901611301565b935061156e60808901611301565b925061157c60a08901611340565b915060c088015180151581141515611592578182fd5b809150505b92959891949750929550565b6000602082840312156115b4578081fd5b6115bd82611340565b90505b92915050565b6000600060006000600060006000600060006000600060006101808d8f0312156115ee578485fd5b8c516bffffffffffffffffffffffff81168114151561160b578586fd5b809c505061161b60208e016112a1565b9a5061162960408e016112a1565b995061163760608e016112a1565b985061164560808e01611320565b975061165360a08e016112b6565b965061166160c08e016112b6565b955061166f60e08e016112d4565b94506101008d015193506101208d0151925061168e6101408e016112d4565b915061169d6101608e016112d4565b90505b9295989b509295989b509295989b565b73ffffffffffffffffffffffffffffffffffffffff811682525b5050565b80151582525b5050565b8060020b82525b5050565b600081518084526116fb816020860160208601611919565b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019150505b92915050565b62ffffff811682525b5050565b60ff811682525b5050565b600060208201905073ffffffffffffffffffffffffffffffffffffffff831682525b92915050565b600060208201905082151582525b92915050565b60006020820190508282525b92915050565b6000602082526117a960208301846116e3565b90505b92915050565b6000602082528251602083015260208301516117d160408401826116b0565b5060408301516117e460608401826116b0565b5060608301516101c08060808501526118016101e08501836116e3565b915060808501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160a086015261183c83826116e3565b92505060a085015161185160c086018261173d565b5060c085015161186460e086018261173d565b5060e0850151610100611879818701836116ce565b8087015191505061012061188f818701836116d8565b808701519150506101406118a5818701836116d8565b808701519150506101606118bb818701836116d8565b808701519150506101806118d1818701836116d8565b808701519150506101a06118e781870183611730565b808701519150506118fa828601826116b0565b5050809150505b92915050565b60006020820190508282525b92915050565b60005b838110156119385780820151818401525b60208101905061191c565b83811115611947576000848401525b505b505050565b73ffffffffffffffffffffffffffffffffffffffff8116811415156119735760006000fd5b5b50565bfea26469706673582212204c426f2aed6908d5ca9cfb7c71d3bdad83a3e7f46d893d7105909aed66cf97f764736f6c63430007060033";

export interface NonfungibleTokenPositionDescriptorLibraryAddresses {
  ["__$28ca7891a259b174646586e2ff5520b353$__"]: string;
}