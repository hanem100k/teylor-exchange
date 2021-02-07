import { Interactor } from "../../../system/Interactor";
import { ExchangeRatesService } from "../../../core/exchangeRates/ExchangeRatesService";
import { CustomResponse } from "../../../system/CustomResponse";

export class ListExchangeRatesInteractor extends Interactor {
  exchangeRateService: ExchangeRatesService;

  constructor() {
  	super();
  	this.exchangeRateService = new ExchangeRatesService();
  }

  async exec(requestModel) {
  	const { rateForDate } = requestModel;
  	const exchangeRates = await this.exchangeRateService.getUnfilteredExchangeRates();

  	const dailyGroupedRates = await this.exchangeRateService.groupUnfilteredRatesByDay(
  		exchangeRates
  	);
  	const latestRates = {};
  	const symbols = Object.keys(dailyGroupedRates);

  	symbols.forEach(symbol => {
  		Object.assign(latestRates, {
  			[symbol]: {
  				date: rateForDate,
  				rates: dailyGroupedRates[symbol][rateForDate] || []
  			}
  		});
  	});

  	const resp = new CustomResponse(latestRates);
  	return resp;
  }
}
