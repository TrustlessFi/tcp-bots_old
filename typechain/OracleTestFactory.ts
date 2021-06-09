/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { OracleTest } from "./OracleTest";

export class OracleTestFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OracleTest> {
    return super.deploy(overrides || {}) as Promise<OracleTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OracleTest {
    return super.attach(address) as OracleTest;
  }
  connect(signer: Signer): OracleTestFactory {
    return super.connect(signer) as OracleTestFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleTest {
    return new Contract(address, _abi, signerOrProvider) as OracleTest;
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
        internalType: "uint32",
        name: "period",
        type: "uint32",
      },
    ],
    name: "consult",
    outputs: [
      {
        internalType: "int24",
        name: "timeWeightedAverageTick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "period",
        type: "uint32",
      },
    ],
    name: "getGasCostOfConsult",
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
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "baseAmount",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
    ],
    name: "getGasCostOfGetQuoteAtTick",
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
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "baseAmount",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
    ],
    name: "getQuoteAtTick",
    outputs: [
      {
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b610edd806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100515760003560e01c806343c57a27146100575780636a816ff9146100f9578063824134891461019b578063bbe8f4191461020757610051565b60006000fd5b6100e36004803603608081101561006e5760006000fd5b81019080803560020b906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610270565b6040518082815260200191505060405180910390f35b610185600480360360808110156101105760006000fd5b81019080803560020b906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610291565b6040518082815260200191505060405180910390f35b6101ee600480360360408110156101b25760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803563ffffffff1690602001909291905050506102bf565b604051808260020b815260200191505060405180910390f35b61025a6004803603604081101561021e5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803563ffffffff1690602001909291905050506102dc565b6040518082815260200191505060405180910390f35b60006102848585858561030663ffffffff16565b905080505b949350505050565b600060005a90506102aa8686868661030663ffffffff16565b505a81039150506102b756505b949350505050565b60006102d1838361054563ffffffff16565b905080505b92915050565b600060005a90506102f3848461054563ffffffff16565b505a810391505061030056505b92915050565b600060006103198661090f63ffffffff16565b90506fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1611151561044a5760008173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160290508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610610403576103fe7801000000000000000000000000000000000000000000000000876fffffffffffffffffffffffffffffffff1683610da663ffffffff16565b610440565b61043f81876fffffffffffffffffffffffffffffffff167801000000000000000000000000000000000000000000000000610da663ffffffff16565b5b925082505061053b565b60006104928273ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1668010000000000000000610da663ffffffff16565b90508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610610500576104fb700100000000000000000000000000000000876fffffffffffffffffffffffffffffffff1683610da663ffffffff16565b610535565b61053481876fffffffffffffffffffffffffffffffff16700100000000000000000000000000000000610da663ffffffff16565b5b92508250505b505b949350505050565b600060008263ffffffff16141515156105c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f425000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b6000600267ffffffffffffffff811180156105e45760006000fd5b506040519080825280602002602001820160405280156106135781602001602082028036833780820191505090505b5090508281600081518110151561062657fe5b602002602001019063ffffffff16908163ffffffff1681526020015050600081600181518110151561065457fe5b602002602001019063ffffffff16908163ffffffff168152602001505060008473ffffffffffffffffffffffffffffffffffffffff1663883bdbfd836040518263ffffffff1660e01b81526004018080602001828103825283818151815260200191508051906020019060200280838360005b838110156106e35780820151818401525b6020810190506106c7565b505050509050019250505060006040518083038186803b1580156107075760006000fd5b505afa15801561071c573d600060003e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060408110156107475760006000fd5b81019080805160405193929190846401000000008211156107685760006000fd5b8382019150602082018581111561077f5760006000fd5b825186602082028301116401000000008211171561079d5760006000fd5b8083526020830192505050908051906020019060200280838360005b838110156107d55780820151818401525b6020810190506107b9565b50505050905001604052602001805160405193929190846401000000008211156107ff5760006000fd5b838201915060208201858111156108165760006000fd5b82518660208202830111640100000000821117156108345760006000fd5b8083526020830192505050908051906020019060200280838360005b8381101561086c5780820151818401525b602081019050610850565b50505050905001604052602001505050509050600081600081518110151561089057fe5b60200260200101518260018151811015156108a757fe5b60200260200101510390508463ffffffff168160060b8115156108c657fe5b059350835060008160060b1280156108f6575060008563ffffffff168260060b8115156108ef57fe5b0760060b14155b15610905578380600190039450505b5050505b92915050565b6000600060008360020b12610927578260020b61092f565b8260020b6000035b90507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b81111515156109d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260018152602001807f540000000000000000000000000000000000000000000000000000000000000081526020015060200191505060405180910390fd5b600060006001831614156109f757700100000000000000000000000000000000610a09565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600060028316141515610a475760806ffff97272373d413259a46990580e213a8202901c905080505b600060048316141515610a705760806ffff2e50f5f656932ef12357cf3c7fdcc8202901c905080505b600060088316141515610a995760806fffe5caca7e10e4e61c3624eaa0941cd08202901c905080505b600060108316141515610ac25760806fffcb9843d60f6159c9db58835c9266448202901c905080505b600060208316141515610aeb5760806fff973b41fa98c081472e6896dfb254c08202901c905080505b600060408316141515610b145760806fff2ea16466c96a3843ec78b326b528618202901c905080505b600060808316141515610b3d5760806ffe5dee046a99a2a811c461f1969c30538202901c905080505b60006101008316141515610b675760806ffcbe86c7900a88aedcffc83b479aa3a48202901c905080505b60006102008316141515610b915760806ff987a7253ac413176f2b074cf7815e548202901c905080505b60006104008316141515610bbb5760806ff3392b0822b70005940c7a398e4b70f38202901c905080505b60006108008316141515610be55760806fe7159475a2c29b7443b29c7fa6e889d98202901c905080505b60006110008316141515610c0f5760806fd097f3bdfd2022b8845ad8f792aa58258202901c905080505b60006120008316141515610c395760806fa9f746462d870fdf8a65dc1f90e061e58202901c905080505b60006140008316141515610c635760806f70d869a156d2a1b890bb3df62baf32f78202901c905080505b60006180008316141515610c8d5760806f31be135f97d08fd981231505542fcfa68202901c905080505b6000620100008316141515610cb85760806f09aa508b5b7a84e1c677de54f3e99bc98202901c905080505b6000620200008316141515610ce25760806e5d6af8dedb81196699c329225ee6048202901c905080505b6000620400008316141515610d0b5760806d2216e584f5fa1ea926041bedfe988202901c905080505b6000620800008316141515610d325760806b048a170391f7dc42444e8fa28202901c905080505b60008460020b1315610d6f57807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811515610d6957fe5b04905080505b600064010000000082811515610d8157fe5b0614610d8e576001610d91565b60005b60ff16602082901c019250825050505b919050565b6000600060006000198587098587029250828110838203039150506000811415610de957600084111515610dda5760006000fd5b83820492508292505050610ea0565b8084111515610df85760006000fd5b6000848688099050828111820391508083039250600085866000031690508086049550808404935060018182600003040190508083028417935083506000600287600302189050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808702600203810290508050808502955085508595505050505050610ea05650505050505b939250505056fea2646970667358221220d6ccf7729ccbfa7da1a52cbb6009dad776beb36bc4dc2c675104f59ec4deadc564736f6c63430007060033";