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
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SwapMathEchidnaTestInterface extends ethers.utils.Interface {
  functions: {
    "checkComputeSwapStepInvariants(uint160,uint160,uint128,int256,uint24)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkComputeSwapStepInvariants",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkComputeSwapStepInvariants",
    data: BytesLike
  ): Result;

  events: {};
}

export class SwapMathEchidnaTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SwapMathEchidnaTestInterface;

  functions: {
    checkComputeSwapStepInvariants(
      sqrtPriceRaw: BigNumberish,
      sqrtPriceTargetRaw: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkComputeSwapStepInvariants(uint160,uint160,uint128,int256,uint24)"(
      sqrtPriceRaw: BigNumberish,
      sqrtPriceTargetRaw: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  checkComputeSwapStepInvariants(
    sqrtPriceRaw: BigNumberish,
    sqrtPriceTargetRaw: BigNumberish,
    liquidity: BigNumberish,
    amountRemaining: BigNumberish,
    feePips: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkComputeSwapStepInvariants(uint160,uint160,uint128,int256,uint24)"(
    sqrtPriceRaw: BigNumberish,
    sqrtPriceTargetRaw: BigNumberish,
    liquidity: BigNumberish,
    amountRemaining: BigNumberish,
    feePips: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    checkComputeSwapStepInvariants(
      sqrtPriceRaw: BigNumberish,
      sqrtPriceTargetRaw: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkComputeSwapStepInvariants(uint160,uint160,uint128,int256,uint24)"(
      sqrtPriceRaw: BigNumberish,
      sqrtPriceTargetRaw: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    checkComputeSwapStepInvariants(
      sqrtPriceRaw: BigNumberish,
      sqrtPriceTargetRaw: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkComputeSwapStepInvariants(uint160,uint160,uint128,int256,uint24)"(
      sqrtPriceRaw: BigNumberish,
      sqrtPriceTargetRaw: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkComputeSwapStepInvariants(
      sqrtPriceRaw: BigNumberish,
      sqrtPriceTargetRaw: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkComputeSwapStepInvariants(uint160,uint160,uint128,int256,uint24)"(
      sqrtPriceRaw: BigNumberish,
      sqrtPriceTargetRaw: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}