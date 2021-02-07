import Joi from "@hapi/joi";

export const getLatestExchangeRateSchema = Joi.object().keys({
	symbol: Joi.string().required()
});
