/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { IAccounting } from "./IAccounting";

export class IAccountingFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccounting {
    return new Contract(address, _abi, signerOrProvider) as IAccounting;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "DebtPositionIndexingDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "PoolPositionIndexingDisabled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftID",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "poolID",
        type: "uint16",
      },
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "addPositionToIndex",
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
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "decreaseDebt",
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
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    name: "decreasePoolLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftID",
        type: "uint256",
      },
    ],
    name: "deletePoolPosition",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "poolID",
        type: "uint16",
      },
    ],
    name: "getParticipatedInLiquidityGenesis",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getParticipatedInMarketGenesis",
    outputs: [
      {
        internalType: "bool",
        name: "participated",
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
        name: "nftID",
        type: "uint256",
      },
    ],
    name: "getPoolPosition",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "poolID",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "cumulativeLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRewards",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "lastTimeRewarded",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "lastBlockPositionIncreased",
            type: "uint256",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct IAccounting.PoolPosition",
        name: "pt",
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
        name: "positionID",
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
            name: "startTCPRewards",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "lastTimeUpdated",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastBorrowTime",
            type: "uint64",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "bool",
            name: "tickSet",
            type: "bool",
          },
          {
            internalType: "uint64",
            name: "tickIndex",
            type: "uint64",
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
    inputs: [
      {
        internalType: "uint16",
        name: "poolID",
        type: "uint16",
      },
    ],
    name: "getRewardStatus",
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
            name: "cumulativeLiquidity",
            type: "uint256",
          },
        ],
        internalType: "struct IAccounting.RewardStatus",
        name: "rs",
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
            name: "totalTCPRewards",
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
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "increaseDebt",
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
    name: "increaseLentZhu",
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
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    name: "increasePoolLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addressToCheck",
        type: "address",
      },
    ],
    name: "isPositionOwner",
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
    name: "lentZhu",
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
        name: "newRewards",
        type: "address",
      },
    ],
    name: "onRewardsUpgrade",
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
    name: "poolLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
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
    name: "sendLentZhu",
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
    name: "sendOneToOneBackedTokens",
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
        internalType: "uint16",
        name: "poolID",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "participated",
        type: "bool",
      },
    ],
    name: "setParticipatedInLiquidityGenesis",
    outputs: [],
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
      {
        internalType: "bool",
        name: "participated",
        type: "bool",
      },
    ],
    name: "setParticipatedInMarketGenesis",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftID",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "poolID",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "cumulativeLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRewards",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "lastTimeRewarded",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "lastBlockPositionIncreased",
            type: "uint256",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct IAccounting.PoolPosition",
        name: "pt",
        type: "tuple",
      },
    ],
    name: "setPoolPosition",
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
            name: "startTCPRewards",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "lastTimeUpdated",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "lastBorrowTime",
            type: "uint64",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "bool",
            name: "tickSet",
            type: "bool",
          },
          {
            internalType: "uint64",
            name: "tickIndex",
            type: "uint64",
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
        internalType: "uint16",
        name: "poolID",
        type: "uint16",
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
            name: "cumulativeLiquidity",
            type: "uint256",
          },
        ],
        internalType: "struct IAccounting.RewardStatus",
        name: "rs",
        type: "tuple",
      },
    ],
    name: "setRewardStatus",
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
            name: "totalTCPRewards",
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