import { Router } from "express";
import { METHOD_URL } from "./constants";
import { SearchExchangeRatesController } from "./SearchExchangeRatesController";
import { searchExchangeRateSchema } from "./SearchExchangeRatesValidation";

const controller = new SearchExchangeRatesController();

const router = Router();
router.post(
	METHOD_URL,
	controller.preHandler({ validation: { body: searchExchangeRateSchema } }),
	controller.handler(),
	controller.reply()
);

export { router as searchExchangeRates };
