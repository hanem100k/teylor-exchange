import { Router } from "express";
import { addExchangeRate } from "./exchangeRates/add/router";
import { latestExchangeRate } from "./exchangeRates/latest/router";
import { searchExchangeRates } from "./exchangeRates/search/router";
import { listExchangeRates } from "./exchangeRates/list/router";

export function initModuleRoutes(router: Router) {
	router.use("/", searchExchangeRates);
	router.use("/", latestExchangeRate);
	router.use("/", listExchangeRates);
	router.use("/", addExchangeRate);
}
