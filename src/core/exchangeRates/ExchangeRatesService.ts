import fs from "fs";
import path from "path";
import csv from "csv-parser";
import NodeCache from "node-cache";
import { ExchangeRatesGateway } from "./ExchangeRatesGateway";
import { ExchangeRateCacheProvider } from "../../system/ExchangeRateCacheProvider";

export class ExchangeRatesService {
  private exchangeRateGw: ExchangeRatesGateway;

  public unfilteredCacheKey: string;

  public dailyGroupedExchangeRateCache: string;

  constructor() {
  	this.exchangeRateGw = new ExchangeRatesGateway();
  	this.unfilteredCacheKey = "currencyCache";
  	this.dailyGroupedExchangeRateCache = "groupedCurrencyCache";
  }

  async getUnfilteredExchangeRates(): Promise<object> {
  	const cache = ExchangeRateCacheProvider.getInstance();
  	const cachedRates = cache.get(this.unfilteredCacheKey) as object;

  	if (cachedRates) {
  		return cachedRates;
  	}
  	return this.createFxDataCache(cache);
  }

  async groupUnfilteredRatesByDay(rates) {
  	const cache = ExchangeRateCacheProvider.getInstance();
  	const cachedGroups = cache.get(
  		this.dailyGroupedExchangeRateCache
  	) as object;

  	if (cachedGroups) {
  		return cachedGroups;
  	}

  	return this.createDailyExchangeRateGroups(rates);
  }

  createDailyExchangeRateGroups(rates) {
  	const results = {};
  	const symbols = Object.keys(rates);

  	symbols.forEach(symbol => {
  		const dayRates = {};
  		rates[symbol].forEach(rate => {
  			const date = rate[0];
  			const dailyRate = Number(rate[1]);
  			// in case  we have multiple rates daily
  			if (!(date in dayRates)) {
  				dayRates[date] = [dailyRate];
  			} else {
  				dayRates[date].push(dailyRate);
  			}
  		});
  		results[symbol] = dayRates;
  	});

  	return results;
  }

  async createFxDataCache(cache: NodeCache): Promise<object> {
  	const files = await this.getFilenamesInDirectory(
  		path.join(`${__dirname}/fxData/`)
  	);

  	// for the purpose of the demo not all types are defined properly
  	const rates = {};
  	for (const file of files) {
  		const rate = await this.gateSymbolRateMapping(
  			path.join(`${__dirname}/fxData/${file}`)
  		);
  		Object.assign(rates, rate);
  	}
  	cache.set(this.unfilteredCacheKey, rates);
  	return rates;
  }

  getFilenamesInDirectory(directoryPath: string): Promise<string[]> {
  	return new Promise((res, rej) => {
  		fs.readdir(directoryPath, (err, files) => {
  			if (err) {
  				return rej(err);
  			}

  			return res(files);
  		});
  	});
  }

  gateSymbolRateMapping(filePath: string) {
  	return new Promise((res, rej) => {
  		const results = {};

  		fs.createReadStream(filePath)
  			.pipe(csv())
  			.on("data", data => {
  				const symbol = Object.keys(data)[1];
  				const dateAndRate = Object.values(data);
  				const missingRate = ".";

  				if (dateAndRate[1] === missingRate) {
  					dateAndRate[1] = null;
  				}

  				if (!results[symbol]) {
  					results[symbol] = [dateAndRate];
  				} else {
  					results[symbol].push(dateAndRate);
  				}
  			})
  			.on("end", () => res(results))
  			.on("error", rej);
  	});
  }

  async addNewRate(exchangeRate: {
    rateForDate: Date;
    symbol: string;
    exchangeRate: number;
  }) {
  	return this.exchangeRateGw.addNewRate(exchangeRate);
  }
}
