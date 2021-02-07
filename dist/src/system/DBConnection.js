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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnectionPool = void 0;
const typeorm_1 = require("typeorm");
const index_1 = require("../core/entities/index");
function getConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            dbName: process.env.DATABASE_NAME,
            dbUser: process.env.DATABASE_USER,
            dbPass: process.env.DATABASE_PWD,
            dbHostname: process.env.DATABASE_HOSTNAME
        };
    });
}
function createConnectionPool() {
    return __awaiter(this, void 0, void 0, function* () {
        const { dbName, dbPass, dbUser, dbHostname } = yield getConfig();
        const connOptions = {
            type: "postgres",
            host: dbHostname,
            username: dbUser,
            password: dbPass,
            database: process.env.NODE_ENV === "test" ? "test" : dbName,
            synchronize: true,
            entities: [index_1.ExchangeRatesEntity],
            migrations: []
        };
        const connection = yield typeorm_1.createConnection(connOptions);
        return connection;
    });
}
exports.createConnectionPool = createConnectionPool;
//# sourceMappingURL=DBConnection.js.map