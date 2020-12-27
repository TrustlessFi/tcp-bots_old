/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMarket } from "../IMarket";

export class IMarket__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMarket {
    return new Contract(address, _abi, signerOrProvider) as IMarket;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "positionID",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralIncrease",
        type: "uint256",
      },
    ],
    name: "Borrow",
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
        indexed: false,
        internalType: "uint64",
        name: "periods",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardCount",
        type: "uint256",
      },
    ],
    name: "InterestAccrued",
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
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "positionID",
        type: "uint64",
      },
    ],
    name: "NewPositionCreated",
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
        internalType: "string",
        name: "paramName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "enum IAccounting.Collateral",
        name: "collateral",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ParameterUpdatedByCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "positionID",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtPaidBack",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralWithdrawn",
        type: "uint256",
      },
    ],
    name: "Payback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "positionID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "period",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtAfter",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cnpRewards",
        type: "uint256",
      },
    ],
    name: "PositionUpdated",
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
    inputs: [],
    name: "accrueInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IAccounting.Collateral",
        name: "collateral",
        type: "uint8",
      },
    ],
    name: "collateralizationRequirement",
    outputs: [
      {
        internalType: "uint256",
        name: "ratio",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastPeriodGlobalInterestAccrued",
    outputs: [
      {
        internalType: "uint64",
        name: "period",
        type: "uint64",
      },
    ],
    stateMutability: "view",
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
    name: "systemAccrueInterest",
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
    ],
    name: "systemGetUpdatedPosition",
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
          {
            internalType: "enum IAccounting.Collateral",
            name: "collateralType",
            type: "uint8",
          },
        ],
        internalType: "struct IAccounting.DebtPosition",
        name: "position",
        type: "tuple",
      },
    ],
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
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "systemNotifyCollateralPriceUpdated",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
