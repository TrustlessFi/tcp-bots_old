/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Other } from "../Other";

export class Other__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Other> {
    return super.deploy(overrides || {}) as Promise<Other>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Other {
    return super.attach(address) as Other;
  }
  connect(signer: Signer): Other__factory {
    return super.connect(signer) as Other__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Other {
    return new Contract(address, _abi, signerOrProvider) as Other;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
    ],
    name: "test_getNextSqrtPriceFromInAndOutput",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156100115760006000fd5b50610017565b61091d806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100305760003560e01c80632de956b71461003657610030565b60006000fd5b6100ab6004803603608081101561004d5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035151590602001909291905050506100ad565b005b6401000276a373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161015801561012d575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16105b15156101395760006000fd5b6f02593f69b02593f69b02593f69b02593836fffffffffffffffffffffffffffffffff1610151561016a5760006000fd5b600061017e8585858561028263ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff1690506401000276a373ffffffffffffffffffffffffffffffffffffffff1681101580156101ea575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff1681105b15156101f257fe5b6102048585858561030c63ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16905080506401000276a373ffffffffffffffffffffffffffffffffffffffff168110158015610272575073fffd8963efd1fc6a506488495d951d5263988d2673ffffffffffffffffffffffffffffffffffffffff1681105b151561027a57fe5b505b50505050565b600060008573ffffffffffffffffffffffffffffffffffffffff161115156102aa5760006000fd5b6000846fffffffffffffffffffffffffffffffff161115156102cc5760006000fd5b816102e9576102e4858585600161039663ffffffff16565b6102fd565b6102fc858585600161055a63ffffffff16565b5b9050610304565b949350505050565b600060008573ffffffffffffffffffffffffffffffffffffffff161115156103345760006000fd5b6000846fffffffffffffffffffffffffffffffff161115156103565760006000fd5b816103735761036e858585600061055a63ffffffff16565b610387565b610386858585600061039663ffffffff16565b5b905061038e565b949350505050565b6000811561047557600073ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff1684111561040757610402846c01000000000000000000000000876fffffffffffffffffffffffffffffffff1661071763ffffffff16565b61042d565b846fffffffffffffffffffffffffffffffff16606060ff1685901b81151561042b57fe5b045b905061046861045b828873ffffffffffffffffffffffffffffffffffffffff1661081890919063ffffffff16565b610836909063ffffffff16565b9150506105525650610551565b600073ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff168411156104de576104d9846c01000000000000000000000000876fffffffffffffffffffffffffffffffff1661086663ffffffff16565b610508565b610507606060ff1685901b866fffffffffffffffffffffffffffffffff166108d263ffffffff16565b5b9050808673ffffffffffffffffffffffffffffffffffffffff1611151561052f5760006000fd5b808673ffffffffffffffffffffffffffffffffffffffff160391505061055256505b5b949350505050565b6000600083141561056d5784905061070f565b6000606060ff16856fffffffffffffffffffffffffffffffff16901b9050821561066b5760008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff1687029250828115156105d057fe5b04141561061a576000818301905082811015156106185761060e838973ffffffffffffffffffffffffffffffffffffffff168361086663ffffffff16565b935050505061070f565b505b61065d82610652878a73ffffffffffffffffffffffffffffffffffffffff168681151561064357fe5b0461081890919063ffffffff16565b6108d263ffffffff16565b9250505061070f565061070d565b60008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff1687029250828115156106aa57fe5b041480156106b757508082115b15156106c35760006000fd5b600081830390506107016106f4848a73ffffffffffffffffffffffffffffffffffffffff168461086663ffffffff16565b610836909063ffffffff16565b935050505061070f5650505b505b949350505050565b600060006000600019858709858702925082811083820303915050600081141561075a5760008411151561074b5760006000fd5b83820492508292505050610811565b80841115156107695760006000fd5b60008486880990508281118203915080830392506000858660000316905080860495508084049350600181826000030401905080830284179350835060006002876003021890508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508087026002038102905080508085029550855085955050505050506108115650505050505b9392505050565b6000828284019150811015151561082f5760006000fd5b5b92915050565b6000818291508173ffffffffffffffffffffffffffffffffffffffff161415156108605760006000fd5b5b919050565b600061087984848461071763ffffffff16565b9050805060008280151561088957fe5b84860911156108ca577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015156108c15760006000fd5b80806001019150505b5b9392505050565b60006000828406118284040190505b9291505056fea2646970667358221220b5588ee63e0eb11ae0ddf532c1d81663bfc0e60409749dd2bf716149559a7ff764736f6c63430007060033";