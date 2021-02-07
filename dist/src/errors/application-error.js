"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
class ApplicationError extends Error {
    constructor(message, status) {
        super();
        this.message = "ApplicationError";
        this.type = "ApplicationError";
        this.status = 500;
        if (message) {
            this.message = message;
        }
        if (status) {
            this.status = status;
        }
    }
}
exports.ApplicationError = ApplicationError;
//# sourceMappingURL=application-error.js.map