import Joi from "@hapi/joi";

// eslint-disable-next-line
const validDateFormat = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

export const addExchangeRateSchema = Joi.object().keys({
	symbol: Joi.string().required(),
	rate: Joi.number()
		.positive()
		.required(),
	rateForDate: Joi.string()
		.regex(validDateFormat)
		.required()
		.error(
			new Joi.ValidationError(
				"ratesForDate format should be YYYY-MM-DD",
				null,
				null
			)
		)
});
