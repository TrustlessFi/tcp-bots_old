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

interface ProtocolLockInterface extends ethers.utils.Interface {
  functions: {
    "authorizeCaller(address)": FunctionFragment;
    "enter()": FunctionFragment;
    "exit()": FunctionFragment;
    "governor()": FunctionFragment;
    "unauthorizeCaller(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "authorizeCaller",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "enter", values?: undefined): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unauthorizeCaller",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "authorizeCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unauthorizeCaller",
    data: BytesLike
  ): Result;

  events: {
    "CallerAuthorized(address)": EventFragment;
    "CallerUnauthorized(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallerAuthorized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallerUnauthorized"): EventFragment;
}

export class ProtocolLock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ProtocolLockInterface;

  functions: {
    authorizeCaller(
      caller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "authorizeCaller(address)"(
      caller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    enter(overrides?: Overrides): Promise<ContractTransaction>;

    "enter()"(overrides?: Overrides): Promise<ContractTransaction>;

    exit(overrides?: Overrides): Promise<ContractTransaction>;

    "exit()"(overrides?: Overrides): Promise<ContractTransaction>;

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

    unauthorizeCaller(
      caller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unauthorizeCaller(address)"(
      caller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  authorizeCaller(
    caller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "authorizeCaller(address)"(
    caller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  enter(overrides?: Overrides): Promise<ContractTransaction>;

  "enter()"(overrides?: Overrides): Promise<ContractTransaction>;

  exit(overrides?: Overrides): Promise<ContractTransaction>;

  "exit()"(overrides?: Overrides): Promise<ContractTransaction>;

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  unauthorizeCaller(
    caller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unauthorizeCaller(address)"(
    caller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    authorizeCaller(caller: string, overrides?: CallOverrides): Promise<void>;

    "authorizeCaller(address)"(
      caller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    enter(overrides?: CallOverrides): Promise<void>;

    "enter()"(overrides?: CallOverrides): Promise<void>;

    exit(overrides?: CallOverrides): Promise<void>;

    "exit()"(overrides?: CallOverrides): Promise<void>;

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    unauthorizeCaller(caller: string, overrides?: CallOverrides): Promise<void>;

    "unauthorizeCaller(address)"(
      caller: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CallerAuthorized(caller: string | null): EventFilter;

    CallerUnauthorized(caller: string | null): EventFilter;
  };

  estimateGas: {
    authorizeCaller(caller: string, overrides?: Overrides): Promise<BigNumber>;

    "authorizeCaller(address)"(
      caller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    enter(overrides?: Overrides): Promise<BigNumber>;

    "enter()"(overrides?: Overrides): Promise<BigNumber>;

    exit(overrides?: Overrides): Promise<BigNumber>;

    "exit()"(overrides?: Overrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    unauthorizeCaller(
      caller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "unauthorizeCaller(address)"(
      caller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authorizeCaller(
      caller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "authorizeCaller(address)"(
      caller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    enter(overrides?: Overrides): Promise<PopulatedTransaction>;

    "enter()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides): Promise<PopulatedTransaction>;

    "exit()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unauthorizeCaller(
      caller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unauthorizeCaller(address)"(
      caller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}