import { Interactor } from "../../../system/Interactor";
import { ExchangeRatesService } from "../../../core/exchangeRates/ExchangeRatesService";
import { CustomResponse } from "../../../system/CustomResponse";
import { BadRequestError } from "../../../errors/bad-request";
import { findClosestDate } from "../../module-utils/findClosestDate";

export class SearchExchangeRatesInteractor extends Interactor {
  exchangeRateService: ExchangeRatesService;

  constructor() {
  	super();
  	this.exchangeRateService = new ExchangeRatesService();
  }

  async exec(requestModel: any) {
  	const { dateRange } = requestModel;
  	const symbol = requestModel.symbol.toUpperCase();
  	// we only accept YYYY-MM-DD format, so getTime will suffice for checking date equality
  	const fromDate = new Date(dateRange.from).getTime();
  	const toDate = new Date(dateRange.to).getTime();

  	if (toDate < fromDate) {
  		throw new BadRequestError("Dates are inverted!");
  	}

  	const exchangeRates = await this.exchangeRateService.getUnfilteredExchangeRates();
  	// we don't trade this security, will just return empty response
  	if (!(symbol in exchangeRates)) {
  		return new CustomResponse([]);
  	}

  	const ratesForSymbol: string[][] = (exchangeRates as any)[symbol];

  	if (
  		this.firstIsPastoDate(ratesForSymbol, toDate)
      || this.lastIsBeforeFromDate(ratesForSymbol, toDate)
  	) {
  		return new CustomResponse([]);
  	}

  	const closestFrom = findClosestDate(fromDate, ratesForSymbol);
  	const closestTo = findClosestDate(toDate, ratesForSymbol);

  	// we just respond with the whole range, we could trim nulls and also cast amounts to number
  	const resp = new CustomResponse(
  		ratesForSymbol.slice(closestFrom, closestTo + 1)
  	);
  	return resp;
  }

  firstIsPastoDate(rates: string[][], toDate: number) {
  	const firstDate = new Date(rates[0][0]).getTime();
  	return firstDate > toDate;
  }

  lastIsBeforeFromDate(rates: string[][], fromDate: number) {
  	const lastDate = new Date(rates[rates.length - 1][0]).getTime();
  	return lastDate < fromDate;
  }
}
