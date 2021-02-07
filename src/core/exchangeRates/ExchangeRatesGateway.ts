import { getRepository } from "typeorm";
import { DBGateway } from "../../system/DBGateway";
import { ExchangeRatesEntity } from "../entities/index";

export class ExchangeRatesGateway extends DBGateway {
	async addNewRate(exchangeRate: {
    rateForDate: Date;
    symbol: string;
    exchangeRate: number;
  }) {
		const repo = getRepository(ExchangeRatesEntity);
		return repo.save(exchangeRate);
	}
}
