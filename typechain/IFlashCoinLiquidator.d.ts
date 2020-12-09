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

interface IFlashCoinLiquidatorInterface extends ethers.utils.Interface {
  functions: {
    "executeOnFlashLiquidate(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "executeOnFlashLiquidate",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeOnFlashLiquidate",
    data: BytesLike
  ): Result;

  events: {};
}

export class IFlashCoinLiquidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IFlashCoinLiquidatorInterface;

  functions: {
    executeOnFlashLiquidate(
      collateralSent: BigNumberish,
      baseTokensToRepay: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeOnFlashLiquidate(uint256,uint256)"(
      collateralSent: BigNumberish,
      baseTokensToRepay: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  executeOnFlashLiquidate(
    collateralSent: BigNumberish,
    baseTokensToRepay: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeOnFlashLiquidate(uint256,uint256)"(
    collateralSent: BigNumberish,
    baseTokensToRepay: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    executeOnFlashLiquidate(
      collateralSent: BigNumberish,
      baseTokensToRepay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "executeOnFlashLiquidate(uint256,uint256)"(
      collateralSent: BigNumberish,
      baseTokensToRepay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    executeOnFlashLiquidate(
      collateralSent: BigNumberish,
      baseTokensToRepay: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeOnFlashLiquidate(uint256,uint256)"(
      collateralSent: BigNumberish,
      baseTokensToRepay: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeOnFlashLiquidate(
      collateralSent: BigNumberish,
      baseTokensToRepay: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeOnFlashLiquidate(uint256,uint256)"(
      collateralSent: BigNumberish,
      baseTokensToRepay: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
