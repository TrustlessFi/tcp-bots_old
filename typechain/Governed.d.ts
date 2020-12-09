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
    "governor()": FunctionFragment;
    "init(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;

  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;

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
  };

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  init(governor_: string, overrides?: Overrides): Promise<ContractTransaction>;

  "init(address)"(
    governor_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    init(governor_: string, overrides?: CallOverrides): Promise<void>;

    "init(address)"(
      governor_: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Initialized(governor: string | null): EventFilter;

    Stopped(): EventFilter;
  };

  estimateGas: {
    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(governor_: string, overrides?: Overrides): Promise<BigNumber>;

    "init(address)"(
      governor_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
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
  };
}
