"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const application_error_1 = require("./application-error");
class BadRequestError extends application_error_1.ApplicationError {
    constructor(message) {
        super(message || "Bad request", 400);
        this.type = "BadRequest";
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=bad-request.js.map