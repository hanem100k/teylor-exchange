import { Router } from "express";
import { METHOD_URL } from "./constants";
import { AddExchangeRatesController } from "./AddExchangeRatesController";
import { addExchangeRateSchema } from "./AddExchangeRatesValidation";

const controller = new AddExchangeRatesController();

const router = Router();
router.post(
	METHOD_URL,
	controller.preHandler({ validation: { body: addExchangeRateSchema } }),
	controller.handler(),
	controller.reply()
);

export { router as addExchangeRate };
