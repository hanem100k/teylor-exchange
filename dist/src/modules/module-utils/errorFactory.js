"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHttpError = void 0;
const index_1 = require("../../errors/index");
const logger_1 = require("../../logger");
// we have a tradeoff here, we could just send a status code from services,
// and the gateway would wrap it inside a custom error, or just pass it along as we get it
function createHttpError(err) {
    logger_1.logger.error("Http request error: ", err);
    if (err.response.badRequest) {
        return new index_1.BadRequestError(err.response.body.message);
    }
    if (err.response.status === 409) {
        return new index_1.Conflict(err.response.body.message);
    }
    if (err.response.status === 404 && err.response.body) {
        return err.response.body.error;
    }
    if (err.response.status === 500) {
        return new index_1.ApplicationError(err.response.body.message);
    }
    return new Error(err.response.body.message);
}
exports.createHttpError = createHttpError;
//# sourceMappingURL=errorFactory.js.map