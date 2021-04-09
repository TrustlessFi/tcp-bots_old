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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ITFGovernorInterface extends ethers.utils.Interface {
  functions: {
    "availableSupply()": FunctionFragment;
    "mintLiquidityIncentive(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "availableSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintLiquidityIncentive",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "availableSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintLiquidityIncentive",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITFGovernor extends Contract {
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

  interface: ITFGovernorInterface;

  functions: {
    availableSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "availableSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintLiquidityIncentive(
      dest: string,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mintLiquidityIncentive(address,uint256)"(
      dest: string,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  availableSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "availableSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  mintLiquidityIncentive(
    dest: string,
    count: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mintLiquidityIncentive(address,uint256)"(
    dest: string,
    count: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    availableSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "availableSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintLiquidityIncentive(
      dest: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintLiquidityIncentive(address,uint256)"(
      dest: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    availableSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "availableSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintLiquidityIncentive(
      dest: string,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mintLiquidityIncentive(address,uint256)"(
      dest: string,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    availableSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "availableSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintLiquidityIncentive(
      dest: string,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mintLiquidityIncentive(address,uint256)"(
      dest: string,
      count: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}