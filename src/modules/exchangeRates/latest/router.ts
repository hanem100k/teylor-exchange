import { Router } from "express";
import { METHOD_URL } from "./constants";
import { LatestExchangeRatesController } from "./LatestExchangeRatesController";
import { getLatestExchangeRateSchema } from "./LatestExchangeRatesValidation";

const controller = new LatestExchangeRatesController();

const router = Router();
router.post(
	METHOD_URL,
	controller.preHandler({ validation: { body: getLatestExchangeRateSchema } }),
	controller.handler(),
	controller.reply()
);

export { router as latestExchangeRate };
