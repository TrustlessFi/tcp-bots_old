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

interface NFTDescriptorTestInterface extends ethers.utils.Interface {
  functions: {
    "addressToString(address)": FunctionFragment;
    "constructTokenURI(tuple)": FunctionFragment;
    "feeToPercentString(uint24)": FunctionFragment;
    "fixedPointToDecimalString(uint160,uint8,uint8)": FunctionFragment;
    "getGasCostOfConstructTokenURI(tuple)": FunctionFragment;
    "tickToDecimalString(int24,int24,uint8,uint8,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressToString",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "constructTokenURI",
    values: [
      {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "feeToPercentString",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fixedPointToDecimalString",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfConstructTokenURI",
    values: [
      {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tickToDecimalString",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressToString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "constructTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeToPercentString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fixedPointToDecimalString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfConstructTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tickToDecimalString",
    data: BytesLike
  ): Result;

  events: {};
}

export class NFTDescriptorTest extends Contract {
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

  interface: NFTDescriptorTestInterface;

  functions: {
    addressToString(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "addressToString(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    constructTokenURI(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    "constructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    feeToPercentString(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "feeToPercentString(uint24)"(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fixedPointToDecimalString(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "fixedPointToDecimalString(uint160,uint8,uint8)"(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGasCostOfConstructTokenURI(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfConstructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tickToDecimalString(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "tickToDecimalString(int24,int24,uint8,uint8,bool)"(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addressToString(_address: string, overrides?: CallOverrides): Promise<string>;

  "addressToString(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<string>;

  constructTokenURI(
    params: {
      token1: string;
      token0: string;
      token0Symbol: string;
      token1Symbol: string;
      token0Decimals: BigNumberish;
      token1Decimals: BigNumberish;
      flipRatio: boolean;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      tickSpacing: BigNumberish;
      fee: BigNumberish;
      liquidity: BigNumberish;
      poolAddress: string;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  "constructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
    params: {
      token1: string;
      token0: string;
      token0Symbol: string;
      token1Symbol: string;
      token0Decimals: BigNumberish;
      token1Decimals: BigNumberish;
      flipRatio: boolean;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      tickSpacing: BigNumberish;
      fee: BigNumberish;
      liquidity: BigNumberish;
      poolAddress: string;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  feeToPercentString(
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "feeToPercentString(uint24)"(
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  fixedPointToDecimalString(
    sqrtRatioX96: BigNumberish,
    token0Decimals: BigNumberish,
    token1Decimals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "fixedPointToDecimalString(uint160,uint8,uint8)"(
    sqrtRatioX96: BigNumberish,
    token0Decimals: BigNumberish,
    token1Decimals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getGasCostOfConstructTokenURI(
    params: {
      token1: string;
      token0: string;
      token0Symbol: string;
      token1Symbol: string;
      token0Decimals: BigNumberish;
      token1Decimals: BigNumberish;
      flipRatio: boolean;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      tickSpacing: BigNumberish;
      fee: BigNumberish;
      liquidity: BigNumberish;
      poolAddress: string;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfConstructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
    params: {
      token1: string;
      token0: string;
      token0Symbol: string;
      token1Symbol: string;
      token0Decimals: BigNumberish;
      token1Decimals: BigNumberish;
      flipRatio: boolean;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      tickSpacing: BigNumberish;
      fee: BigNumberish;
      liquidity: BigNumberish;
      poolAddress: string;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tickToDecimalString(
    tick: BigNumberish,
    tickSpacing: BigNumberish,
    token0Decimals: BigNumberish,
    token1Decimals: BigNumberish,
    flipRatio: boolean,
    overrides?: CallOverrides
  ): Promise<string>;

  "tickToDecimalString(int24,int24,uint8,uint8,bool)"(
    tick: BigNumberish,
    tickSpacing: BigNumberish,
    token0Decimals: BigNumberish,
    token1Decimals: BigNumberish,
    flipRatio: boolean,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addressToString(
      _address: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "addressToString(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<string>;

    constructTokenURI(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "constructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    feeToPercentString(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "feeToPercentString(uint24)"(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fixedPointToDecimalString(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "fixedPointToDecimalString(uint160,uint8,uint8)"(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getGasCostOfConstructTokenURI(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfConstructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickToDecimalString(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    "tickToDecimalString(int24,int24,uint8,uint8,bool)"(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addressToString(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addressToString(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    constructTokenURI(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "constructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeToPercentString(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "feeToPercentString(uint24)"(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fixedPointToDecimalString(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fixedPointToDecimalString(uint160,uint8,uint8)"(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfConstructTokenURI(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfConstructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickToDecimalString(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tickToDecimalString(int24,int24,uint8,uint8,bool)"(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressToString(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addressToString(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    constructTokenURI(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "constructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeToPercentString(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "feeToPercentString(uint24)"(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fixedPointToDecimalString(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fixedPointToDecimalString(uint160,uint8,uint8)"(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfConstructTokenURI(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfConstructTokenURI((address,address,string,string,uint8,uint8,bool,int24,int24,int24,uint24,uint256,address))"(
      params: {
        token1: string;
        token0: string;
        token0Symbol: string;
        token1Symbol: string;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        liquidity: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tickToDecimalString(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tickToDecimalString(int24,int24,uint8,uint8,bool)"(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}