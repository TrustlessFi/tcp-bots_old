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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PeriodTimeInterface extends ethers.utils.Interface {
  functions: {
    "currentPeriod()": FunctionFragment;
    "firstPeriod()": FunctionFragment;
    "periodLength()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "currentPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "firstPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "periodLength",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "currentPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "firstPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodLength",
    data: BytesLike
  ): Result;

  events: {};
}

export class PeriodTime extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PeriodTimeInterface;

  functions: {
    currentPeriod(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { period: BigNumber }>;

    "currentPeriod()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { period: BigNumber }>;

    firstPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    "firstPeriod()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    periodLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "periodLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "currentPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "firstPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  periodLength(overrides?: CallOverrides): Promise<BigNumber>;

  "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "currentPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "firstPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    periodLength(overrides?: CallOverrides): Promise<BigNumber>;

    "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "currentPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    firstPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "firstPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    periodLength(overrides?: CallOverrides): Promise<BigNumber>;

    "periodLength()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentPeriod()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    firstPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "firstPeriod()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "periodLength()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
