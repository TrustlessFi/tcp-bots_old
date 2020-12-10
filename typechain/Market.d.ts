/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MarketInterface extends ethers.utils.Interface {
  functions: {
    "accrueInterest()": FunctionFragment;
    "borrow(uint64,uint256,uint256)": FunctionFragment;
    "collateralizationRequirement()": FunctionFragment;
    "createNewPosition()": FunctionFragment;
    "dsrPercentage()": FunctionFragment;
    "governor()": FunctionFragment;
    "init(address)": FunctionFragment;
    "lend(uint256)": FunctionFragment;
    "lendTokenValue(uint256)": FunctionFragment;
    "maxDebt()": FunctionFragment;
    "minBorrowTime()": FunctionFragment;
    "minCollateralToDebtRatio()": FunctionFragment;
    "minPositionSize()": FunctionFragment;
    "payback(uint64,uint256,uint256)": FunctionFragment;
    "periodLength()": FunctionFragment;
    "periodsBehind()": FunctionFragment;
    "setCollateralizationRequirement(uint256)": FunctionFragment;
    "setDsrPercentage(uint256)": FunctionFragment;
    "setMaxDebt(uint256)": FunctionFragment;
    "setMinBorrowTime(uint64)": FunctionFragment;
    "setMinPositionSize(uint256)": FunctionFragment;
    "stop()": FunctionFragment;
    "systemAccrueInterest()": FunctionFragment;
    "systemGetUpdatedPosition(uint64)": FunctionFragment;
    "systemNotifyCollateralPriceUpdated(uint256)": FunctionFragment;
    "unlend(uint256)": FunctionFragment;
    "updatePositionAndRegisterRewards(uint64)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accrueInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralizationRequirement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createNewPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dsrPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;
  encodeFunctionData(functionFragment: "lend", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "lendTokenValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "maxDebt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minBorrowTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minCollateralToDebtRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minPositionSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payback",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "periodLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "periodsBehind",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCollateralizationRequirement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDsrPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxDebt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinBorrowTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinPositionSize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stop", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "systemAccrueInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "systemGetUpdatedPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "systemNotifyCollateralPriceUpdated",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlend",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePositionAndRegisterRewards",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accrueInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralizationRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNewPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dsrPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lendTokenValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minBorrowTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minCollateralToDebtRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minPositionSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payback", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodsBehind",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollateralizationRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDsrPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMaxDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinBorrowTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinPositionSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "systemAccrueInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "systemGetUpdatedPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "systemNotifyCollateralPriceUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updatePositionAndRegisterRewards",
    data: BytesLike
  ): Result;

  events: {
    "Borrow(address,uint64,uint256,uint256)": EventFragment;
    "Initialized(address)": EventFragment;
    "InterestAccrued(uint64,uint64,uint256,uint256,uint256)": EventFragment;
    "Lend(address,uint256,uint256)": EventFragment;
    "NewPositionCreated(address,uint64)": EventFragment;
    "ParameterUpdated(string,uint256)": EventFragment;
    "ParameterUpdated64(string,uint64)": EventFragment;
    "ParameterUpdatedMapping(string,uint8,uint256)": EventFragment;
    "Payback(address,uint64,uint256,uint256)": EventFragment;
    "PositionUpdated(uint256,uint64,uint64,uint256,uint256)": EventFragment;
    "Stopped()": EventFragment;
    "Unlend(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InterestAccrued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Lend"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPositionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParameterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParameterUpdated64"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParameterUpdatedMapping"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Payback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PositionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlend"): EventFragment;
}

export class Market extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MarketInterface;

  functions: {
    accrueInterest(overrides?: Overrides): Promise<ContractTransaction>;

    "accrueInterest()"(overrides?: Overrides): Promise<ContractTransaction>;

    borrow(
      positionID: BigNumberish,
      borrowCount: BigNumberish,
      collateralCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrow(uint64,uint256,uint256)"(
      positionID: BigNumberish,
      borrowCount: BigNumberish,
      collateralCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    collateralizationRequirement(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "collateralizationRequirement()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    createNewPosition(overrides?: Overrides): Promise<ContractTransaction>;

    "createNewPosition()"(overrides?: Overrides): Promise<ContractTransaction>;

    dsrPercentage(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "dsrPercentage()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    governor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "governor()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    init(
      governor_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "init(address)"(
      governor_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lend(
      coinCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lend(uint256)"(
      coinCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lendTokenValue(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coinCount: BigNumber;
      0: BigNumber;
    }>;

    "lendTokenValue(uint256)"(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coinCount: BigNumber;
      0: BigNumber;
    }>;

    maxDebt(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "maxDebt()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    minBorrowTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "minBorrowTime()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    minCollateralToDebtRatio(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "minCollateralToDebtRatio()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    minPositionSize(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "minPositionSize()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    payback(
      positionID: BigNumberish,
      coinsToPayBack: BigNumberish,
      collateralToWithdraw: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "payback(uint64,uint256,uint256)"(
      positionID: BigNumberish,
      coinsToPayBack: BigNumberish,
      collateralToWithdraw: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    periodLength(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "periodLength()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    periodsBehind(
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber;
      0: BigNumber;
    }>;

    "periodsBehind()"(
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber;
      0: BigNumber;
    }>;

    setCollateralizationRequirement(
      requirement: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCollateralizationRequirement(uint256)"(
      requirement: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setDsrPercentage(
      percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDsrPercentage(uint256)"(
      percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMaxDebt(
      debt: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMaxDebt(uint256)"(
      debt: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMinBorrowTime(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMinBorrowTime(uint64)"(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMinPositionSize(
      size: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMinPositionSize(uint256)"(
      size: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stop(overrides?: Overrides): Promise<ContractTransaction>;

    "stop()"(overrides?: Overrides): Promise<ContractTransaction>;

    systemAccrueInterest(overrides?: Overrides): Promise<ContractTransaction>;

    "systemAccrueInterest()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    systemGetUpdatedPosition(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "systemGetUpdatedPosition(uint64)"(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    systemNotifyCollateralPriceUpdated(
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "systemNotifyCollateralPriceUpdated(uint256)"(
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unlend(
      lendTokenCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unlend(uint256)"(
      lendTokenCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updatePositionAndRegisterRewards(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updatePositionAndRegisterRewards(uint64)"(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  accrueInterest(overrides?: Overrides): Promise<ContractTransaction>;

  "accrueInterest()"(overrides?: Overrides): Promise<ContractTransaction>;

  borrow(
    positionID: BigNumberish,
    borrowCount: BigNumberish,
    collateralCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrow(uint64,uint256,uint256)"(
    positionID: BigNumberish,
    borrowCount: BigNumberish,
    collateralCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;

  "collateralizationRequirement()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createNewPosition(overrides?: Overrides): Promise<ContractTransaction>;

  "createNewPosition()"(overrides?: Overrides): Promise<ContractTransaction>;

  dsrPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  "dsrPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  init(governor_: string, overrides?: Overrides): Promise<ContractTransaction>;

  "init(address)"(
    governor_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lend(
    coinCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lend(uint256)"(
    coinCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lendTokenValue(
    lendTokenCount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "lendTokenValue(uint256)"(
    lendTokenCount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxDebt(overrides?: CallOverrides): Promise<BigNumber>;

  "maxDebt()"(overrides?: CallOverrides): Promise<BigNumber>;

  minBorrowTime(overrides?: CallOverrides): Promise<BigNumber>;

  "minBorrowTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  minCollateralToDebtRatio(overrides?: CallOverrides): Promise<BigNumber>;

  "minCollateralToDebtRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

  minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;

  "minPositionSize()"(overrides?: CallOverrides): Promise<BigNumber>;

  payback(
    positionID: BigNumberish,
    coinsToPayBack: BigNumberish,
    collateralToWithdraw: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "payback(uint64,uint256,uint256)"(
    positionID: BigNumberish,
    coinsToPayBack: BigNumberish,
    collateralToWithdraw: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  periodLength(overrides?: CallOverrides): Promise<BigNumber>;

  "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  periodsBehind(overrides?: CallOverrides): Promise<BigNumber>;

  "periodsBehind()"(overrides?: CallOverrides): Promise<BigNumber>;

  setCollateralizationRequirement(
    requirement: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCollateralizationRequirement(uint256)"(
    requirement: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setDsrPercentage(
    percentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDsrPercentage(uint256)"(
    percentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMaxDebt(
    debt: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMaxDebt(uint256)"(
    debt: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMinBorrowTime(
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMinBorrowTime(uint64)"(
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMinPositionSize(
    size: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMinPositionSize(uint256)"(
    size: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stop(overrides?: Overrides): Promise<ContractTransaction>;

  "stop()"(overrides?: Overrides): Promise<ContractTransaction>;

  systemAccrueInterest(overrides?: Overrides): Promise<ContractTransaction>;

  "systemAccrueInterest()"(overrides?: Overrides): Promise<ContractTransaction>;

  systemGetUpdatedPosition(
    positionID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "systemGetUpdatedPosition(uint64)"(
    positionID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  systemNotifyCollateralPriceUpdated(
    price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "systemNotifyCollateralPriceUpdated(uint256)"(
    price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unlend(
    lendTokenCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unlend(uint256)"(
    lendTokenCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updatePositionAndRegisterRewards(
    positionID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updatePositionAndRegisterRewards(uint64)"(
    positionID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    accrueInterest(overrides?: CallOverrides): Promise<void>;

    "accrueInterest()"(overrides?: CallOverrides): Promise<void>;

    borrow(
      positionID: BigNumberish,
      borrowCount: BigNumberish,
      collateralCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "borrow(uint64,uint256,uint256)"(
      positionID: BigNumberish,
      borrowCount: BigNumberish,
      collateralCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;

    "collateralizationRequirement()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createNewPosition(overrides?: CallOverrides): Promise<BigNumber>;

    "createNewPosition()"(overrides?: CallOverrides): Promise<BigNumber>;

    dsrPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "dsrPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    init(governor_: string, overrides?: CallOverrides): Promise<void>;

    "init(address)"(
      governor_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lend(coinCount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "lend(uint256)"(
      coinCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lendTokenValue(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lendTokenValue(uint256)"(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDebt(overrides?: CallOverrides): Promise<BigNumber>;

    "maxDebt()"(overrides?: CallOverrides): Promise<BigNumber>;

    minBorrowTime(overrides?: CallOverrides): Promise<BigNumber>;

    "minBorrowTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    minCollateralToDebtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "minCollateralToDebtRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;

    "minPositionSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    payback(
      positionID: BigNumberish,
      coinsToPayBack: BigNumberish,
      collateralToWithdraw: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "payback(uint64,uint256,uint256)"(
      positionID: BigNumberish,
      coinsToPayBack: BigNumberish,
      collateralToWithdraw: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    periodLength(overrides?: CallOverrides): Promise<BigNumber>;

    "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    periodsBehind(overrides?: CallOverrides): Promise<BigNumber>;

    "periodsBehind()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCollateralizationRequirement(
      requirement: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCollateralizationRequirement(uint256)"(
      requirement: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDsrPercentage(
      percentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDsrPercentage(uint256)"(
      percentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxDebt(debt: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setMaxDebt(uint256)"(
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinBorrowTime(
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMinBorrowTime(uint64)"(
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinPositionSize(
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMinPositionSize(uint256)"(
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stop(overrides?: CallOverrides): Promise<void>;

    "stop()"(overrides?: CallOverrides): Promise<void>;

    systemAccrueInterest(overrides?: CallOverrides): Promise<void>;

    "systemAccrueInterest()"(overrides?: CallOverrides): Promise<void>;

    systemGetUpdatedPosition(
      positionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      startCumulativeDebt: BigNumber;
      collateral: BigNumber;
      debt: BigNumber;
      startDebtExchangeRate: BigNumber;
      startCNPRewards: BigNumber;
      collateralizationBandIndex: BigNumber;
      lastUpdateTime: BigNumber;
      lastBorrowTime: BigNumber;
      collateralizationBand: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: number;
    }>;

    "systemGetUpdatedPosition(uint64)"(
      positionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      startCumulativeDebt: BigNumber;
      collateral: BigNumber;
      debt: BigNumber;
      startDebtExchangeRate: BigNumber;
      startCNPRewards: BigNumber;
      collateralizationBandIndex: BigNumber;
      lastUpdateTime: BigNumber;
      lastBorrowTime: BigNumber;
      collateralizationBand: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: number;
    }>;

    systemNotifyCollateralPriceUpdated(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "systemNotifyCollateralPriceUpdated(uint256)"(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unlend(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "unlend(uint256)"(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePositionAndRegisterRewards(
      positionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updatePositionAndRegisterRewards(uint64)"(
      positionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Borrow(
      borrower: string | null,
      positionID: BigNumberish | null,
      borrowAmount: null,
      collateralIncrease: null
    ): EventFilter;

    Initialized(governor: string | null): EventFilter;

    InterestAccrued(
      period: BigNumberish | null,
      periods: null,
      oldDebt: null,
      newDebt: null,
      rewardCount: null
    ): EventFilter;

    Lend(
      account: string | null,
      coinCount: null,
      lendTokenCount: null
    ): EventFilter;

    NewPositionCreated(
      creator: string | null,
      positionID: BigNumberish | null
    ): EventFilter;

    ParameterUpdated(paramName: string | null, value: null): EventFilter;

    ParameterUpdated64(paramName: string | null, value: null): EventFilter;

    ParameterUpdatedMapping(
      paramName: string | null,
      key: null,
      value: null
    ): EventFilter;

    Payback(
      caller: string | null,
      positionID: BigNumberish | null,
      debtPaidBack: null,
      collateralWithdrawn: null
    ): EventFilter;

    PositionUpdated(
      positionID: BigNumberish | null,
      period: BigNumberish | null,
      periods: null,
      debtAfter: null,
      govRewards: null
    ): EventFilter;

    Stopped(): EventFilter;

    Unlend(
      account: string | null,
      coinCount: null,
      lendTokenCount: null
    ): EventFilter;
  };

  estimateGas: {
    accrueInterest(overrides?: Overrides): Promise<BigNumber>;

    "accrueInterest()"(overrides?: Overrides): Promise<BigNumber>;

    borrow(
      positionID: BigNumberish,
      borrowCount: BigNumberish,
      collateralCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "borrow(uint64,uint256,uint256)"(
      positionID: BigNumberish,
      borrowCount: BigNumberish,
      collateralCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    collateralizationRequirement(overrides?: CallOverrides): Promise<BigNumber>;

    "collateralizationRequirement()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createNewPosition(overrides?: Overrides): Promise<BigNumber>;

    "createNewPosition()"(overrides?: Overrides): Promise<BigNumber>;

    dsrPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "dsrPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(governor_: string, overrides?: Overrides): Promise<BigNumber>;

    "init(address)"(
      governor_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lend(coinCount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "lend(uint256)"(
      coinCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lendTokenValue(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lendTokenValue(uint256)"(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDebt(overrides?: CallOverrides): Promise<BigNumber>;

    "maxDebt()"(overrides?: CallOverrides): Promise<BigNumber>;

    minBorrowTime(overrides?: CallOverrides): Promise<BigNumber>;

    "minBorrowTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    minCollateralToDebtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "minCollateralToDebtRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    minPositionSize(overrides?: CallOverrides): Promise<BigNumber>;

    "minPositionSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    payback(
      positionID: BigNumberish,
      coinsToPayBack: BigNumberish,
      collateralToWithdraw: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "payback(uint64,uint256,uint256)"(
      positionID: BigNumberish,
      coinsToPayBack: BigNumberish,
      collateralToWithdraw: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    periodLength(overrides?: CallOverrides): Promise<BigNumber>;

    "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    periodsBehind(overrides?: CallOverrides): Promise<BigNumber>;

    "periodsBehind()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCollateralizationRequirement(
      requirement: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCollateralizationRequirement(uint256)"(
      requirement: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setDsrPercentage(
      percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDsrPercentage(uint256)"(
      percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMaxDebt(debt: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setMaxDebt(uint256)"(
      debt: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMinBorrowTime(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMinBorrowTime(uint64)"(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMinPositionSize(
      size: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMinPositionSize(uint256)"(
      size: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stop(overrides?: Overrides): Promise<BigNumber>;

    "stop()"(overrides?: Overrides): Promise<BigNumber>;

    systemAccrueInterest(overrides?: Overrides): Promise<BigNumber>;

    "systemAccrueInterest()"(overrides?: Overrides): Promise<BigNumber>;

    systemGetUpdatedPosition(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "systemGetUpdatedPosition(uint64)"(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    systemNotifyCollateralPriceUpdated(
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "systemNotifyCollateralPriceUpdated(uint256)"(
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unlend(
      lendTokenCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "unlend(uint256)"(
      lendTokenCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updatePositionAndRegisterRewards(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updatePositionAndRegisterRewards(uint64)"(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accrueInterest(overrides?: Overrides): Promise<PopulatedTransaction>;

    "accrueInterest()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    borrow(
      positionID: BigNumberish,
      borrowCount: BigNumberish,
      collateralCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrow(uint64,uint256,uint256)"(
      positionID: BigNumberish,
      borrowCount: BigNumberish,
      collateralCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    collateralizationRequirement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralizationRequirement()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createNewPosition(overrides?: Overrides): Promise<PopulatedTransaction>;

    "createNewPosition()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    dsrPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dsrPercentage()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      governor_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "init(address)"(
      governor_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lend(
      coinCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lend(uint256)"(
      coinCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lendTokenValue(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lendTokenValue(uint256)"(
      lendTokenCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxDebt()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minBorrowTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minBorrowTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minCollateralToDebtRatio(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minCollateralToDebtRatio()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minPositionSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minPositionSize()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payback(
      positionID: BigNumberish,
      coinsToPayBack: BigNumberish,
      collateralToWithdraw: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "payback(uint64,uint256,uint256)"(
      positionID: BigNumberish,
      coinsToPayBack: BigNumberish,
      collateralToWithdraw: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "periodLength()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodsBehind(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "periodsBehind()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCollateralizationRequirement(
      requirement: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCollateralizationRequirement(uint256)"(
      requirement: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setDsrPercentage(
      percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDsrPercentage(uint256)"(
      percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMaxDebt(
      debt: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMaxDebt(uint256)"(
      debt: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMinBorrowTime(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMinBorrowTime(uint64)"(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMinPositionSize(
      size: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMinPositionSize(uint256)"(
      size: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stop(overrides?: Overrides): Promise<PopulatedTransaction>;

    "stop()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    systemAccrueInterest(overrides?: Overrides): Promise<PopulatedTransaction>;

    "systemAccrueInterest()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    systemGetUpdatedPosition(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "systemGetUpdatedPosition(uint64)"(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    systemNotifyCollateralPriceUpdated(
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "systemNotifyCollateralPriceUpdated(uint256)"(
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unlend(
      lendTokenCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unlend(uint256)"(
      lendTokenCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updatePositionAndRegisterRewards(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updatePositionAndRegisterRewards(uint64)"(
      positionID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}