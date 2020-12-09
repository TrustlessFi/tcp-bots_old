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

interface ActionValidatorInterface extends ethers.utils.Interface {
  functions: {
    "validateAction(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "validateAction",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "validateAction",
    data: BytesLike
  ): Result;

  events: {};
}

export class ActionValidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ActionValidatorInterface;

  functions: {
    validateAction(
      signature: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "validateAction(string)"(
      signature: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  validateAction(
    signature: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "validateAction(string)"(
    signature: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    validateAction(signature: string, overrides?: CallOverrides): Promise<void>;

    "validateAction(string)"(
      signature: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    validateAction(
      signature: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "validateAction(string)"(
      signature: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    validateAction(
      signature: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "validateAction(string)"(
      signature: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
