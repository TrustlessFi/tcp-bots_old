import hre from 'hardhat';
const e = hre.ethers;
const provider = e.provider;
import { BigNumber } from "ethers";

export const StoMS = (seconds: number) => seconds * 1000;

export const bigint = (x: BigNumber): bigint => BigInt(x.toString()).valueOf();

export const formatTime = (seconds: number) => (new Date(seconds * 1000)).toISOString().substr(11, 8);

export const getBlockTime = async (): Promise<number> => (await provider.getBlock("latest")).timestamp;

export const years = (years: number)     => years * days(365);
export const weeks = (weeks: number)     => weeks * days(7);
export const days = (days: number)       => days * hours(24);
export const hours = (hours: number)     => hours * minutes(60);
export const minutes = (minutes: number) => minutes * seconds(60);
export const seconds = (seconds: number) => seconds;

interface coingeckoPriceData {
  symbol: string;
  current_price: number;
}
