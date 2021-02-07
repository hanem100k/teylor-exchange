import { Interactor } from "../../../system/Interactor";
import { ExchangeRatesService } from "../../../core/exchangeRates/ExchangeRatesService";
import { CustomResponse } from "../../../system/CustomResponse";
import { BadRequestError } from "../../../errors/bad-request";

export class AddExchangeRatesInteractor extends Interactor {
  exchangeRateService: ExchangeRatesService;

  constructor() {
  	super();
  	this.exchangeRateService = new ExchangeRatesService();
  }

  async exec(requestModel) {
  	const { rateForDate, symbol, rate } = requestModel;

  	// we can have many validations over here, and most depend on the domain of the business
  	// we could sanity check the rate (if its within x% of our last captured rate)
  	// we could not allow it if we already have for the day etc etc etc.

  	if (new Date(rateForDate).getTime() > new Date().getTime()) {
  		throw new BadRequestError(
  			"Adding exchange rates for future dates is forbidden!"
  		);
  	}

  	const validExchangeRate = {
  		symbol: symbol.toUpperCase(),
  		exchangeRate: rate,
  		rateForDate
  	};
  	const exchangeRate = await this.exchangeRateService.addNewRate(
      validExchangeRate as any
  	);
  	const resp = new CustomResponse(exchangeRate);
  	return resp;
  }
}
