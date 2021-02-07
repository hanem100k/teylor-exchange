import { Interactor } from "../../../system/Interactor";
import { ExchangeRatesService } from "../../../core/exchangeRates/ExchangeRatesService";
import { CustomResponse } from "../../../system/CustomResponse";

export class LatestExchangeRatesInteractor extends Interactor {
  exchangeRateService: ExchangeRatesService;

  constructor() {
  	super();
  	this.exchangeRateService = new ExchangeRatesService();
  }

  async exec(requestModel) {
  	const symbol = requestModel.symbol.toUpperCase();

  	const exchangeRates = await this.exchangeRateService.getUnfilteredExchangeRates();

  	if (!(symbol in exchangeRates)) {
  		return new CustomResponse({});
  	}
  	const ratesForSymbol = exchangeRates[symbol];

  	const latestValidRate = {};
  	for (let i = ratesForSymbol.length - 1; i >= 0; i -= 1) {
  		if (ratesForSymbol[i][1]) {
  			Object.assign(latestValidRate, {
  				symbol,
  				latestDate: new Date(ratesForSymbol[i][0]),
  				rate: Number(ratesForSymbol[i][1])
  			});

  			break;
  		}
  	}
  	// we could set up a response model for every response, however, for the purpose of this demo im just returning an inline constructed object
  	// it should be the latest valid rate or an emtpy object if we don't have a valid rate for the symbol
  	const resp = new CustomResponse(latestValidRate);
  	return resp;
  }
}
