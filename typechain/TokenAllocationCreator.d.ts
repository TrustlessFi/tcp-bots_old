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

interface TokenAllocationCreatorInterface extends ethers.utils.Interface {
  functions: {
    "allocation(uint256)": FunctionFragment;
    "allocations()": FunctionFragment;
    "cnp()": FunctionFragment;
    "createAllocation(uint256,address,uint64,uint64,string,bool)": FunctionFragment;
    "deployer()": FunctionFragment;
    "governor()": FunctionFragment;
    "init(address)": FunctionFragment;
    "nextAllocationID()": FunctionFragment;
    "stopped()": FunctionFragment;
    "validAllocation(address)": FunctionFragment;
    "validUpdate(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allocation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allocations",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cnp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createAllocation",
    values: [BigNumberish, string, BigNumberish, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;
  encodeFunctionData(
    functionFragment: "nextAllocationID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validAllocation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validUpdate",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "allocation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cnp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextAllocationID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validUpdate",
    data: BytesLike
  ): Result;

  events: {
    "AllocationCreated(uint64,address,address,uint256,uint64,uint64,string)": EventFragment;
    "Initialized(address)": EventFragment;
    "Stopped()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllocationCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
}

export class TokenAllocationCreator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TokenAllocationCreatorInterface;

  functions: {
    allocation(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "allocation(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allocations(overrides?: CallOverrides): Promise<[string[]]>;

    "allocations()"(overrides?: CallOverrides): Promise<[string[]]>;

    cnp(overrides?: CallOverrides): Promise<[string]>;

    "cnp()"(overrides?: CallOverrides): Promise<[string]>;

    createAllocation(
      count: BigNumberish,
      allocatee: string,
      startTime: BigNumberish,
      endTime: BigNumberish,
      allocationPurposeExplanation: string,
      canAdminister: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createAllocation(uint256,address,uint64,uint64,string,bool)"(
      count: BigNumberish,
      allocatee: string,
      startTime: BigNumberish,
      endTime: BigNumberish,
      allocationPurposeExplanation: string,
      canAdminister: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

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

    nextAllocationID(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextAllocationID()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    stopped(overrides?: CallOverrides): Promise<[boolean]>;

    "stopped()"(overrides?: CallOverrides): Promise<[boolean]>;

    validAllocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "validAllocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validUpdate(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "validUpdate(bytes4)"(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  allocation(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allocation(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allocations(overrides?: CallOverrides): Promise<string[]>;

  "allocations()"(overrides?: CallOverrides): Promise<string[]>;

  cnp(overrides?: CallOverrides): Promise<string>;

  "cnp()"(overrides?: CallOverrides): Promise<string>;

  createAllocation(
    count: BigNumberish,
    allocatee: string,
    startTime: BigNumberish,
    endTime: BigNumberish,
    allocationPurposeExplanation: string,
    canAdminister: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createAllocation(uint256,address,uint64,uint64,string,bool)"(
    count: BigNumberish,
    allocatee: string,
    startTime: BigNumberish,
    endTime: BigNumberish,
    allocationPurposeExplanation: string,
    canAdminister: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  deployer(overrides?: CallOverrides): Promise<string>;

  "deployer()"(overrides?: CallOverrides): Promise<string>;

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  init(_governor: string, overrides?: Overrides): Promise<ContractTransaction>;

  "init(address)"(
    _governor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  nextAllocationID(overrides?: CallOverrides): Promise<BigNumber>;

  "nextAllocationID()"(overrides?: CallOverrides): Promise<BigNumber>;

  stopped(overrides?: CallOverrides): Promise<boolean>;

  "stopped()"(overrides?: CallOverrides): Promise<boolean>;

  validAllocation(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "validAllocation(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "validUpdate(bytes4)"(
    action: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    allocation(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allocation(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allocations(overrides?: CallOverrides): Promise<string[]>;

    "allocations()"(overrides?: CallOverrides): Promise<string[]>;

    cnp(overrides?: CallOverrides): Promise<string>;

    "cnp()"(overrides?: CallOverrides): Promise<string>;

    createAllocation(
      count: BigNumberish,
      allocatee: string,
      startTime: BigNumberish,
      endTime: BigNumberish,
      allocationPurposeExplanation: string,
      canAdminister: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    "createAllocation(uint256,address,uint64,uint64,string,bool)"(
      count: BigNumberish,
      allocatee: string,
      startTime: BigNumberish,
      endTime: BigNumberish,
      allocationPurposeExplanation: string,
      canAdminister: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    deployer(overrides?: CallOverrides): Promise<string>;

    "deployer()"(overrides?: CallOverrides): Promise<string>;

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    init(_governor: string, overrides?: CallOverrides): Promise<void>;

    "init(address)"(
      _governor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nextAllocationID(overrides?: CallOverrides): Promise<BigNumber>;

    "nextAllocationID()"(overrides?: CallOverrides): Promise<BigNumber>;

    stopped(overrides?: CallOverrides): Promise<boolean>;

    "stopped()"(overrides?: CallOverrides): Promise<boolean>;

    validAllocation(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "validAllocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validUpdate(action: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "validUpdate(bytes4)"(
      action: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    AllocationCreated(
      id: null,
      allocation: string | null,
      allocatee: string | null,
      count: null,
      startTime: null,
      endTime: null,
      allocationPurposeExplanation: null
    ): EventFilter;

    Initialized(governor: string | null): EventFilter;

    Stopped(): EventFilter;
  };

  estimateGas: {
    allocation(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "allocation(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allocations(overrides?: CallOverrides): Promise<BigNumber>;

    "allocations()"(overrides?: CallOverrides): Promise<BigNumber>;

    cnp(overrides?: CallOverrides): Promise<BigNumber>;

    "cnp()"(overrides?: CallOverrides): Promise<BigNumber>;

    createAllocation(
      count: BigNumberish,
      allocatee: string,
      startTime: BigNumberish,
      endTime: BigNumberish,
      allocationPurposeExplanation: string,
      canAdminister: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createAllocation(uint256,address,uint64,uint64,string,bool)"(
      count: BigNumberish,
      allocatee: string,
      startTime: BigNumberish,
      endTime: BigNumberish,
      allocationPurposeExplanation: string,
      canAdminister: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    "deployer()"(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(_governor: string, overrides?: Overrides): Promise<BigNumber>;

    "init(address)"(
      _governor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    nextAllocationID(overrides?: CallOverrides): Promise<BigNumber>;

    "nextAllocationID()"(overrides?: CallOverrides): Promise<BigNumber>;

    stopped(overrides?: CallOverrides): Promise<BigNumber>;

    "stopped()"(overrides?: CallOverrides): Promise<BigNumber>;

    validAllocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validAllocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
    allocation(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allocation(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allocations(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "allocations()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cnp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cnp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createAllocation(
      count: BigNumberish,
      allocatee: string,
      startTime: BigNumberish,
      endTime: BigNumberish,
      allocationPurposeExplanation: string,
      canAdminister: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createAllocation(uint256,address,uint64,uint64,string,bool)"(
      count: BigNumberish,
      allocatee: string,
      startTime: BigNumberish,
      endTime: BigNumberish,
      allocationPurposeExplanation: string,
      canAdminister: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

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

    nextAllocationID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextAllocationID()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stopped()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validAllocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validAllocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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
