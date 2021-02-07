import { Router } from "express";
import { METHOD_URL } from "./constants";
import { ListExchangeRatesController } from "./ListExchangeRatesController";
import { listExchangeRateSchema } from "./ListExchangeRatesValidation";

const controller = new ListExchangeRatesController();

const router = Router();
router.post(
	METHOD_URL,
	controller.preHandler({ validation: { body: listExchangeRateSchema } }),
	controller.handler(),
	controller.reply()
);

export { router as listExchangeRates };
