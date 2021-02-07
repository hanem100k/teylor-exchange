import Joi from "@hapi/joi";

// eslint-disable-next-line
const validDateFormat = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

export const searchExchangeRateSchema = Joi.object().keys({
	dateRange: Joi.object().keys({
		from: Joi.string()
			.regex(validDateFormat)
			.required()
			.error(
				new Joi.ValidationError("Date format should be YYYY-MM-DD", null, null)
			),
		to: Joi.string()
			.regex(validDateFormat)
			.required()
			.error(
				new Joi.ValidationError("Date format should be YYYY-MM-DD", null, null)
			)
	}),
	symbol: Joi.string().required()
});
