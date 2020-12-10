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

interface StoppableInterface extends ethers.utils.Interface {
  functions: {
    "stop()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "stop", values?: undefined): string;

  decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;

  events: {};
}

export class Stoppable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StoppableInterface;

  functions: {
    stop(overrides?: Overrides): Promise<ContractTransaction>;

    "stop()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  stop(overrides?: Overrides): Promise<ContractTransaction>;

  "stop()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    stop(overrides?: CallOverrides): Promise<void>;

    "stop()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    stop(overrides?: Overrides): Promise<BigNumber>;

    "stop()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    stop(overrides?: Overrides): Promise<PopulatedTransaction>;

    "stop()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}