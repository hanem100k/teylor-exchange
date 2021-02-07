"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
class UnauthorizedError extends Error {
    constructor(message, type) {
        super();
        this.status = 403;
        this.type = type || "UNAUTHORIZED";
        this.message = message || "Unauthorized";
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=unauthorized.js.map