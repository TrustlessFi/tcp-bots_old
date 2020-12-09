/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IAccounting } from "../IAccounting";

export class IAccounting__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccounting {
    return new Contract(address, _abi, signerOrProvider) as IAccounting;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "increase",
        type: "bool",
      },
    ],
    name: "adjustDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "debt",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Pair",
        name: "pair",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "distributePairTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64",
      },
    ],
    name: "getBasicPositionInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "debtCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLiquidationAccount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startDebtExchangeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateral",
            type: "uint256",
          },
        ],
        internalType: "struct IAccounting.LiquidationAccount",
        name: "lqAcct",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Pair",
        name: "pair",
        type: "address",
      },
    ],
    name: "getPairTokenPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalRewards",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "count",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativePairCoinCount",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "lastPeriodRewarded",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "unlockPeriod",
            type: "uint64",
          },
        ],
        internalType: "struct IAccounting.PairTokenPosition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64",
      },
    ],
    name: "getPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startCumulativeDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startDebtExchangeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startCNPRewards",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "collateralizationBandIndex",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastUpdateTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastBorrowTime",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "collateralizationBand",
            type: "uint32",
          },
        ],
        internalType: "struct IAccounting.DebtPosition",
        name: "acct",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSystemDebtInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCNPRewards",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtExchangeRate",
            type: "uint256",
          },
        ],
        internalType: "struct IAccounting.SystemDebtInfo",
        name: "",
        type: "tuple",
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
        name: "count",
        type: "uint256",
      },
    ],
    name: "sendCollateral",
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
    name: "sendLentCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startDebtExchangeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateral",
            type: "uint256",
          },
        ],
        internalType: "struct IAccounting.LiquidationAccount",
        name: "lqAcct",
        type: "tuple",
      },
    ],
    name: "setLiquidationAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Pair",
        name: "pair",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "totalRewards",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "count",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativePairCoinCount",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "lastPeriodRewarded",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "unlockPeriod",
            type: "uint64",
          },
        ],
        internalType: "struct IAccounting.PairTokenPosition",
        name: "pt",
        type: "tuple",
      },
    ],
    name: "setPairTokenPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionID",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "startCumulativeDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startDebtExchangeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startCNPRewards",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "collateralizationBandIndex",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastUpdateTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastBorrowTime",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "collateralizationBand",
            type: "uint32",
          },
        ],
        internalType: "struct IAccounting.DebtPosition",
        name: "dp",
        type: "tuple",
      },
    ],
    name: "setPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCNPRewards",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtExchangeRate",
            type: "uint256",
          },
        ],
        internalType: "struct IAccounting.SystemDebtInfo",
        name: "_systemDebtInfo",
        type: "tuple",
      },
    ],
    name: "setSystemDebtInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
