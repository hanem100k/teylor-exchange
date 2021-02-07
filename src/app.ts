import bodyParser from "body-parser";
import compression from "compression";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { ApplicationError } from "./errors/application-error";
import routes from "./routes";
import { logger } from "./logger";

export const app = express();
export const router = express.Router();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("x-powered-by");

app.set("port", process.env.PORT || 8080);

app.use(routes);

app.use(
	(err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
		console.log("this is err", err);
		logger.error(`Error: ${err}`);
		if (res.headersSent) {
			return next(err);
		}

		return res.status(err.status || 500).json({
			error: process.env.NODE_ENV === "development" ? err : undefined,
			message: err.message
		});
	}
);
