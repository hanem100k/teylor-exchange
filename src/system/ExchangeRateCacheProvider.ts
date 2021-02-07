import Cache from "node-cache";

// to achieve low latency most exchange rate providers are probably using multiple layers of caching
// we'll just have a very simple one for the purpose of this demo

export class ExchangeRateCacheProvider {
  private cache: Cache;

  private static instance: ExchangeRateCacheProvider;

  private constructor() {
  	this.cache = new Cache({ stdTTL: 6000, checkperiod: 6020 });
  }

  public static getInstance() {
  	if (!ExchangeRateCacheProvider.instance) {
  		ExchangeRateCacheProvider.instance = new ExchangeRateCacheProvider();
  	}

  	return ExchangeRateCacheProvider.instance.cache;
  }
}
