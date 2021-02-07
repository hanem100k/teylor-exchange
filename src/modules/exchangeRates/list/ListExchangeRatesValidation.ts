import Joi from "@hapi/joi";

// eslint-disable-next-line
const validDateFormat = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

export const listExchangeRateSchema = Joi.object().keys({
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
