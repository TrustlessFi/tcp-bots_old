import hre from 'hardhat';
const e = hre.ethers;
const provider = e.provider;

export const StoMS = (seconds: number) => seconds * 1000;

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

export const getCoinGeckoPriceInUSD = async (currencyIDs: Array<string>): Promise<Array<number>> => {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
  let priceDatas: Array<coingeckoPriceData> = (await response.json()) as Array<coingeckoPriceData>;
  return currencyIDs.map(
    currencyID => priceDatas.filter(priceData => priceData.symbol == currencyID)[0].current_price
  );
}
