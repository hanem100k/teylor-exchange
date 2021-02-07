"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/first */
const dotenv_1 = __importDefault(require("dotenv"));
const DBConnection_1 = require("../system/DBConnection");
const logger_1 = require("../logger");
const result = dotenv_1.default.config();
if (result.error) {
    dotenv_1.default.config({ path: ".env.example" });
}
const app_1 = require("../app");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    // when launching via docker compose, db will take some time to get up and running
    // using very simple linear retry logic for the purpose of this demo,
    // to make sure we have access to it (docker docs does describe some more elegant solutions)
    let retries = 5;
    while (retries) {
        try {
            yield DBConnection_1.createConnectionPool();
            app_1.app.listen(app_1.app.get("port"), () => {
                console.log("\x1b[36m%s\x1b[0m", // eslint-disable-line
                `🌏 Express server started at http://localhost:${app_1.app.get("port")}`);
                if (process.env.NODE_ENV === "development") {
                    console.log("\x1b[36m%s\x1b[0m", // eslint-disable-line
                    `⚙️  Swagger UI hosted at http://localhost:${app_1.app.get("port")}/dev/api-docs`);
                }
            });
            break;
        }
        catch (err) {
            logger_1.logger.error(err);
            retries -= 1;
            logger_1.logger.info(`Retries left  ${retries}`);
            yield new Promise(res => setTimeout(res, 5000));
        }
    }
});
startServer().catch(err => {
    logger_1.logger.error("Connection Error, existing process", err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map