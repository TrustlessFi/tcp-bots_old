/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EnforcedDecentralization } from "../EnforcedDecentralization";

export class EnforcedDecentralization__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EnforcedDecentralization> {
    return super.deploy(overrides || {}) as Promise<EnforcedDecentralization>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnforcedDecentralization {
    return super.attach(address) as EnforcedDecentralization;
  }
  connect(signer: Signer): EnforcedDecentralization__factory {
    return super.connect(signer) as EnforcedDecentralization__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnforcedDecentralization {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnforcedDecentralization;
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
    inputs: [],
    name: "Stopped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "locktime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "delaysRemaining",
        type: "uint8",
      },
    ],
    name: "UpdateLockDelayed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "locktime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "delaysRemaining",
        type: "uint8",
      },
    ],
    name: "UpgradeLockDelayed",
    type: "event",
  },
  {
    inputs: [],
    name: "LOCK_EXTENSION",
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
        internalType: "bytes4",
        name: "signatureHash",
        type: "bytes4",
      },
    ],
    name: "blacklistAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractUpgradeLockDelaysRemaining",
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
    inputs: [],
    name: "contractUpgradeLockTime",
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
    name: "delayContractUpgradeExpiration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delayParameterUpdateExpiration",
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
    inputs: [],
    name: "parameterUpdateLockDelaysRemaining",
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
    inputs: [],
    name: "parameterUpdateLockTime",
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
        internalType: "string",
        name: "signature",
        type: "string",
      },
    ],
    name: "validateAction",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526003600760106101000a81548160ff021916908360ff1602179055506003600760116101000a81548160ff021916908360ff16021790555034801561004857600080fd5b5033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016006819055506120dd806100a16000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c8063589c7f9c116100815780639a51b06b1161005b5780639a51b06b14610211578063c14f4aea146102cc578063d2da30aa146102f4576100c9565b8063589c7f9c146101b05780637b5fd264146101ba57806386b2eaec146101c4576100c9565b80631a17b854116100b25780631a17b8541461014657806339242609146101675780634275b29114610188576100c9565b80630c340a24146100ce57806319ab453c14610102575b600080fd5b6100d661031c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101446004803603602081101561011857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610340565b005b61014e61083a565b604051808260ff16815260200191505060405180910390f35b61016f61084d565b604051808260ff16815260200191505060405180910390f35b610190610860565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6101b861087a565b005b6101c2610da5565b005b61020f600480360360208110156101da57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506112d0565b005b6102ca6004803603602081101561022757600080fd5b810190808035906020019064010000000081111561024457600080fd5b82018360208201111561025657600080fd5b8035906020019184600183028401116401000000008311171561027857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061158b565b005b6102d46118f3565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6102fc61190d565b604051808267ffffffffffffffff16815260200191505060405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610403576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f476f7665726e65643a20496e6974206e6f7420617574686f72697a65642e000081525060200191505060405180910390fd5b600560006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558073ffffffffffffffffffffffffffffffffffffffff167f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e660405160405180910390a2806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561051157600080fd5b505afa158015610525573d6000803e3d6000fd5b505050506040513d602081101561053b57600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166311df99956040518163ffffffff1660e01b815260040160206040518083038186803b1580156105f257600080fd5b505afa158015610606573d6000803e3d6000fd5b505050506040513d602081101561061c57600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d478b0876040518163ffffffff1660e01b815260040160206040518083038186803b1580156106d357600080fd5b505afa1580156106e7573d6000803e3d6000fd5b505050506040513d60208110156106fd57600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633fc8cef36040518163ffffffff1660e01b815260040160206040518083038186803b1580156107b457600080fd5b505afa1580156107c8573d6000803e3d6000fd5b505050506040513d60208110156107de57600080fd5b8101908080519060200190929190505050600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610837611914565b50565b600760109054906101000a900460ff1681565b600760119054906101000a900460ff1681565b600760009054906101000a900467ffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156108e457600080fd5b505af11580156108f8573d6000803e3d6000fd5b5050505060026006541415610975576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b50726f746f636f6c3a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b600260068190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a3e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b600760089054906101000a900467ffffffffffffffff1667ffffffffffffffff16610a67611f3d565b67ffffffffffffffff1610610ae4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f416c7265616479206c6f636b65642e000000000000000000000000000000000081525060200191505060405180910390fd5b610af062278d00611f4d565b67ffffffffffffffff16600760089054906101000a900467ffffffffffffffff1667ffffffffffffffff1610610b8e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f45787069726174696f6e206e6f74206e6561722e00000000000000000000000081525060200191505060405180910390fd5b6000600760119054906101000a900460ff1660ff161415610c17576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4e6f2064656c6179732072656d61696e696e672e00000000000000000000000081525060200191505060405180910390fd5b610c4d62278d00600760089054906101000a900467ffffffffffffffff1667ffffffffffffffff16611f7a90919063ffffffff16565b600760086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506007601181819054906101000a900460ff16809291906001900391906101000a81548160ff021916908360ff160217905550507f9c363fbf73ee737b9a4d8d8c70d975021444b497163c001875ed0e27896d5791600760089054906101000a900467ffffffffffffffff16600760119054906101000a900460ff16604051808367ffffffffffffffff1681526020018260ff1681526020019250505060405180910390a16001600681905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610d8b57600080fd5b505af1158015610d9f573d6000803e3d6000fd5b50505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610e0f57600080fd5b505af1158015610e23573d6000803e3d6000fd5b5050505060026006541415610ea0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b50726f746f636f6c3a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b600260068190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff16610f92611f3d565b67ffffffffffffffff161061100f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f416c7265616479206c6f636b65642e000000000000000000000000000000000081525060200191505060405180910390fd5b61101b62278d00611f4d565b67ffffffffffffffff16600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff16106110b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f45787069726174696f6e206e6f74206e6561722e00000000000000000000000081525060200191505060405180910390fd5b6000600760109054906101000a900460ff1660ff161415611142576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4e6f2064656c6179732072656d61696e696e672e00000000000000000000000081525060200191505060405180910390fd5b61117862278d00600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff16611f7a90919063ffffffff16565b600760006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506007601081819054906101000a900460ff16809291906001900391906101000a81548160ff021916908360ff160217905550507fd7af0d150188650f0d6947c95c4ce2c495cec35cfae5ab0eb41806ec6595cdb6600760009054906101000a900467ffffffffffffffff16600760109054906101000a900460ff16604051808367ffffffffffffffff1681526020018260ff1681526020019250505060405180910390a16001600681905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156112b657600080fd5b505af11580156112ca573d6000803e3d6000fd5b50505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e97dcb626040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561133a57600080fd5b505af115801561134e573d6000803e3d6000fd5b50505050600260065414156113cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4c6f636b50726f746f636f6c3a207265656e7472616e742063616c6c2e00000081525060200191505060405180910390fd5b600260068190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611494576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f476f7665726e65643a204e6f7420417574686f72697a65642e0000000000000081525060200191505060405180910390fd5b600160096000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600681905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561157057600080fd5b505af1158015611584573d6000803e3d6000fd5b5050505050565b600081805190602001209050600b6000827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff161561160157506118f0565b60096000827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16156116d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f416374696f6e20626c61636b6c69737465642e0000000000000000000000000081525060200191505060405180910390fd5b600a6000827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff161561173d57506118f0565b6000611747611f3d565b9050600760089054906101000a900467ffffffffffffffff1667ffffffffffffffff168167ffffffffffffffff16106117e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f5065726d616e656e7420616374696f6e73206f6e6c792e00000000000000000081525060200191505060405180910390fd5b8067ffffffffffffffff16600760009054906101000a900467ffffffffffffffff1667ffffffffffffffff1610156118ed5760086000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16156118ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f557067726164652077696e646f7720657870697265642e00000000000000000081525060200191505060405180910390fd5b5b50505b50565b600760089054906101000a900467ffffffffffffffff1681565b62278d0081565b6119216301e13380611f4d565b600760006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506119566303c26700611f4d565b600760086101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600160086000631a92109c60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160086000634559c80860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160086000636dcea85f60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600860006358326dc660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600860006343861c5a60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016008600063ec38a86260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550600160086000638f4e6f3760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016009600063c3f6428460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600960006307da68f560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555060016009600063a99acb1760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600a600063ffd7d98360e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600b600063232948ea60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600b60006380b5c66560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550565b6000611f4842612016565b905090565b6000611f7382611f5b611f3d565b67ffffffffffffffff16611f7a90919063ffffffff16565b9050919050565b60008082840190508367ffffffffffffffff168167ffffffffffffffff16101561200c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000680100000000000000008210612079576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806120826026913960400191505060405180910390fd5b81905091905056fe53616665436173743a2076616c756520646f65736e27742066697420696e2036342062697473a2646970667358221220b3f73f74963da295ba1d1c4a4acee196d8ee0f1ad9e377df6a8bd73ae1835ef664736f6c63430007040033";
