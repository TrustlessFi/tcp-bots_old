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

interface ExampleSlidingWindowOracleInterface extends ethers.utils.Interface {
  functions: {
    "consult(address,uint256,address)": FunctionFragment;
    "factory()": FunctionFragment;
    "granularity()": FunctionFragment;
    "observationIndexOf(uint256)": FunctionFragment;
    "pairObservations(address,uint256)": FunctionFragment;
    "periodSize()": FunctionFragment;
    "update(address,address)": FunctionFragment;
    "windowSize()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "consult",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "granularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "observationIndexOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pairObservations",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "periodSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "windowSize",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "granularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "observationIndexOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairObservations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "periodSize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "windowSize", data: BytesLike): Result;

  events: {};
}

export class ExampleSlidingWindowOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ExampleSlidingWindowOracleInterface;

  functions: {
    consult(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    "consult(address,uint256,address)"(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    granularity(overrides?: CallOverrides): Promise<[number]>;

    "granularity()"(overrides?: CallOverrides): Promise<[number]>;

    observationIndexOf(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { index: number }>;

    "observationIndexOf(uint256)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { index: number }>;

    pairObservations(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;

    "pairObservations(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;

    periodSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    "periodSize()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    update(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "update(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    windowSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    "windowSize()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  consult(
    tokenIn: string,
    amountIn: BigNumberish,
    tokenOut: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "consult(address,uint256,address)"(
    tokenIn: string,
    amountIn: BigNumberish,
    tokenOut: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  granularity(overrides?: CallOverrides): Promise<number>;

  "granularity()"(overrides?: CallOverrides): Promise<number>;

  observationIndexOf(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "observationIndexOf(uint256)"(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  pairObservations(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      price0Cumulative: BigNumber;
      price1Cumulative: BigNumber;
    }
  >;

  "pairObservations(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      price0Cumulative: BigNumber;
      price1Cumulative: BigNumber;
    }
  >;

  periodSize(overrides?: CallOverrides): Promise<BigNumber>;

  "periodSize()"(overrides?: CallOverrides): Promise<BigNumber>;

  update(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "update(address,address)"(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  windowSize(overrides?: CallOverrides): Promise<BigNumber>;

  "windowSize()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    consult(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "consult(address,uint256,address)"(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    granularity(overrides?: CallOverrides): Promise<number>;

    "granularity()"(overrides?: CallOverrides): Promise<number>;

    observationIndexOf(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "observationIndexOf(uint256)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    pairObservations(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;

    "pairObservations(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;

    periodSize(overrides?: CallOverrides): Promise<BigNumber>;

    "periodSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "update(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<void>;

    windowSize(overrides?: CallOverrides): Promise<BigNumber>;

    "windowSize()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    consult(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "consult(address,uint256,address)"(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    "granularity()"(overrides?: CallOverrides): Promise<BigNumber>;

    observationIndexOf(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "observationIndexOf(uint256)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairObservations(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pairObservations(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    periodSize(overrides?: CallOverrides): Promise<BigNumber>;

    "periodSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "update(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    windowSize(overrides?: CallOverrides): Promise<BigNumber>;

    "windowSize()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    consult(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "consult(address,uint256,address)"(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "granularity()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    observationIndexOf(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "observationIndexOf(uint256)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairObservations(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pairObservations(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    periodSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "periodSize()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "update(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    windowSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "windowSize()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
