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

interface GovernedInterface extends ethers.utils.Interface {
  functions: {
    "deployer()": FunctionFragment;
    "governor()": FunctionFragment;
    "init(address)": FunctionFragment;
    "stopped()": FunctionFragment;
    "validUpdate(bytes4)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;
  encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validUpdate",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validUpdate",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(address)": EventFragment;
    "Stopped()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
}

export class Governed extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GovernedInterface;

  functions: {
    deployer(overrides?: CallOverrides): Promise<[string]>;

    "deployer()"(overrides?: CallOverrides): Promise<[string]>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    "governor()"(overrides?: CallOverrides): Promise<[string]>;

    init(
      _governor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "init(address)"(
      _governor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stopped(overrides?: CallOverrides): Promise<[boolean]>;

    "stopped()"(overrides?: CallOverrides): Promise<[boolean]>;

    validUpdate(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "validUpdate(bytes4)"(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  deployer(overrides?: CallOverrides): Promise<string>;

  "deployer()"(overrides?: CallOverrides): Promise<string>;

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  init(_governor: string, overrides?: Overrides): Promise<ContractTransaction>;

  "init(address)"(
    _governor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stopped(overrides?: CallOverrides): Promise<boolean>;

  "stopped()"(overrides?: CallOverrides): Promise<boolean>;

  validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "validUpdate(bytes4)"(
    action: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    deployer(overrides?: CallOverrides): Promise<string>;

    "deployer()"(overrides?: CallOverrides): Promise<string>;

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    init(_governor: string, overrides?: CallOverrides): Promise<void>;

    "init(address)"(
      _governor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stopped(overrides?: CallOverrides): Promise<boolean>;

    "stopped()"(overrides?: CallOverrides): Promise<boolean>;

    validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "validUpdate(bytes4)"(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Initialized(governor: string | null): EventFilter;

    Stopped(): EventFilter;
  };

  estimateGas: {
    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    "deployer()"(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(_governor: string, overrides?: Overrides): Promise<BigNumber>;

    "init(address)"(
      _governor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stopped(overrides?: CallOverrides): Promise<BigNumber>;

    "stopped()"(overrides?: CallOverrides): Promise<BigNumber>;

    validUpdate(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validUpdate(bytes4)"(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "deployer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      _governor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "init(address)"(
      _governor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stopped()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validUpdate(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validUpdate(bytes4)"(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
