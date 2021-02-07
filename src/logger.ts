import { createLogger, format, transports } from "winston";

const { combine, timestamp, colorize } = format;

const logTransports = [
	new transports.Console({
		level: "info",
		format: format.combine(
			format.printf(options => {
				const {
					level, message, timestamp, ...metadata
				} = options;

				let msg = `${timestamp} [${level}] - ${metadata.service} - ${message} : `;
				// If we extend metadata, we might just append the string to the end
				if (metadata && Object.keys(metadata).length > 1) {
					delete metadata.service;
					msg += JSON.stringify(metadata, null, 2);
				}

				return msg;
			})
		)
	})
];

export const logger = createLogger({
	format: combine(colorize(), timestamp()),
	transports: logTransports,
	defaultMeta: { service: "exchangeService" }
});
