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

interface DelayedRewardsInterface extends ethers.utils.Interface {
  functions: {
    "checkFutureRewards(address,uint64)": FunctionFragment;
    "checkRewardsAvailable(address,uint64)": FunctionFragment;
    "claimRewards(uint64[])": FunctionFragment;
    "governor()": FunctionFragment;
    "init(address)": FunctionFragment;
    "pendingRewards(uint64,address)": FunctionFragment;
    "periodLength()": FunctionFragment;
    "registerRewards(uint64,address,uint256)": FunctionFragment;
    "rewardDelay()": FunctionFragment;
    "setRewardDelay(uint64)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkFutureRewards",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkRewardsAvailable",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;
  encodeFunctionData(
    functionFragment: "pendingRewards",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "periodLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerRewards",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardDelay",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkFutureRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkRewardsAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardDelay",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(address)": EventFragment;
    "ParameterUpdated64(string,uint64)": EventFragment;
    "RewardsClaimed(uint64,address,uint256)": EventFragment;
    "RewardsClaimedInstantly(address,uint256)": EventFragment;
    "RewardsRegistered(uint64,address,uint256)": EventFragment;
    "Stopped()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParameterUpdated64"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsClaimedInstantly"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
}

export class DelayedRewards extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DelayedRewardsInterface;

  functions: {
    checkFutureRewards(
      account: string,
      periodsForward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber[];
      totalRewards: BigNumber;
      0: BigNumber[];
      1: BigNumber;
    }>;

    "checkFutureRewards(address,uint64)"(
      account: string,
      periodsForward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber[];
      totalRewards: BigNumber;
      0: BigNumber[];
      1: BigNumber;
    }>;

    checkRewardsAvailable(
      account: string,
      periodsBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber[];
      totalRewards: BigNumber;
      0: BigNumber[];
      1: BigNumber;
    }>;

    "checkRewardsAvailable(address,uint64)"(
      account: string,
      periodsBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber[];
      totalRewards: BigNumber;
      0: BigNumber[];
      1: BigNumber;
    }>;

    claimRewards(
      periods: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimRewards(uint64[])"(
      periods: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

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

    pendingRewards(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "pendingRewards(uint64,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

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

    registerRewards(
      rewardTime: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerRewards(uint64,address,uint256)"(
      rewardTime: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    rewardDelay(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "rewardDelay()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setRewardDelay(
      _rewardDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRewardDelay(uint64)"(
      _rewardDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  checkFutureRewards(
    account: string,
    periodsForward: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    periods: BigNumber[];
    totalRewards: BigNumber;
    0: BigNumber[];
    1: BigNumber;
  }>;

  "checkFutureRewards(address,uint64)"(
    account: string,
    periodsForward: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    periods: BigNumber[];
    totalRewards: BigNumber;
    0: BigNumber[];
    1: BigNumber;
  }>;

  checkRewardsAvailable(
    account: string,
    periodsBack: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    periods: BigNumber[];
    totalRewards: BigNumber;
    0: BigNumber[];
    1: BigNumber;
  }>;

  "checkRewardsAvailable(address,uint64)"(
    account: string,
    periodsBack: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    periods: BigNumber[];
    totalRewards: BigNumber;
    0: BigNumber[];
    1: BigNumber;
  }>;

  claimRewards(
    periods: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimRewards(uint64[])"(
    periods: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  init(governor_: string, overrides?: Overrides): Promise<ContractTransaction>;

  "init(address)"(
    governor_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pendingRewards(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingRewards(uint64,address)"(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  periodLength(overrides?: CallOverrides): Promise<BigNumber>;

  "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  registerRewards(
    rewardTime: BigNumberish,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerRewards(uint64,address,uint256)"(
    rewardTime: BigNumberish,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  rewardDelay(overrides?: CallOverrides): Promise<BigNumber>;

  "rewardDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

  setRewardDelay(
    _rewardDelay: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRewardDelay(uint64)"(
    _rewardDelay: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    checkFutureRewards(
      account: string,
      periodsForward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber[];
      totalRewards: BigNumber;
      0: BigNumber[];
      1: BigNumber;
    }>;

    "checkFutureRewards(address,uint64)"(
      account: string,
      periodsForward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber[];
      totalRewards: BigNumber;
      0: BigNumber[];
      1: BigNumber;
    }>;

    checkRewardsAvailable(
      account: string,
      periodsBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber[];
      totalRewards: BigNumber;
      0: BigNumber[];
      1: BigNumber;
    }>;

    "checkRewardsAvailable(address,uint64)"(
      account: string,
      periodsBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      periods: BigNumber[];
      totalRewards: BigNumber;
      0: BigNumber[];
      1: BigNumber;
    }>;

    claimRewards(
      periods: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claimRewards(uint64[])"(
      periods: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    init(governor_: string, overrides?: CallOverrides): Promise<void>;

    "init(address)"(
      governor_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingRewards(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewards(uint64,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    periodLength(overrides?: CallOverrides): Promise<BigNumber>;

    "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerRewards(
      rewardTime: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerRewards(uint64,address,uint256)"(
      rewardTime: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardDelay(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardDelay(
      _rewardDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRewardDelay(uint64)"(
      _rewardDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Initialized(governor: string | null): EventFilter;

    ParameterUpdated64(paramName: string | null, value: null): EventFilter;

    RewardsClaimed(
      period: BigNumberish | null,
      account: string | null,
      amount: null
    ): EventFilter;

    RewardsClaimedInstantly(account: string | null, amount: null): EventFilter;

    RewardsRegistered(
      period: BigNumberish | null,
      account: string | null,
      amount: null
    ): EventFilter;

    Stopped(): EventFilter;
  };

  estimateGas: {
    checkFutureRewards(
      account: string,
      periodsForward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkFutureRewards(address,uint64)"(
      account: string,
      periodsForward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkRewardsAvailable(
      account: string,
      periodsBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkRewardsAvailable(address,uint64)"(
      account: string,
      periodsBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(
      periods: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimRewards(uint64[])"(
      periods: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(governor_: string, overrides?: Overrides): Promise<BigNumber>;

    "init(address)"(
      governor_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pendingRewards(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewards(uint64,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    periodLength(overrides?: CallOverrides): Promise<BigNumber>;

    "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerRewards(
      rewardTime: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerRewards(uint64,address,uint256)"(
      rewardTime: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    rewardDelay(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardDelay(
      _rewardDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRewardDelay(uint64)"(
      _rewardDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkFutureRewards(
      account: string,
      periodsForward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkFutureRewards(address,uint64)"(
      account: string,
      periodsForward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkRewardsAvailable(
      account: string,
      periodsBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkRewardsAvailable(address,uint64)"(
      account: string,
      periodsBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      periods: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimRewards(uint64[])"(
      periods: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

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

    pendingRewards(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingRewards(uint64,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "periodLength()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerRewards(
      rewardTime: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerRewards(uint64,address,uint256)"(
      rewardTime: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    rewardDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardDelay()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardDelay(
      _rewardDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRewardDelay(uint64)"(
      _rewardDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
