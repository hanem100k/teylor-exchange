/* eslint-disable import/first */
import dotenv from "dotenv";
import { createConnectionPool } from "../system/DBConnection";
import { logger } from "../logger";

const result = dotenv.config();
if (result.error) {
	dotenv.config({ path: ".env.example" });
}

import { app } from "../app";

const startServer = async () => {
	// when launching via docker compose, db will take some time to get up and running
	// using very simple linear retry logic for the purpose of this demo,
	// to make sure we have access to it (docker docs does describe some more elegant solutions)
	let retries = 5;
	while (retries) {
		try {
			await createConnectionPool();
			app.listen(app.get("port"), (): void => {
				console.log(
          "\x1b[36m%s\x1b[0m", // eslint-disable-line
					`🌏 Express server started at http://localhost:${app.get("port")}`
				);
				if (process.env.NODE_ENV === "development") {
					console.log(
            "\x1b[36m%s\x1b[0m", // eslint-disable-line
						`⚙️  Swagger UI hosted at http://localhost:${app.get(
							"port"
						)}/dev/api-docs`
					);
				}
			});

			break;
		} catch (err) {
			logger.error(err);
			retries -= 1;
			logger.info(`Retries left  ${retries}`);
			await new Promise(res => setTimeout(res, 5000));
		}
	}
};

startServer().catch(err => {
	logger.error("Connection Error, existing process", err);
	process.exit(1);
});
