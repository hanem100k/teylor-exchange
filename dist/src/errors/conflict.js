"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conflict = void 0;
const application_error_1 = require("./application-error");
class Conflict extends application_error_1.ApplicationError {
    constructor(message) {
        super(message || "Conflict", 409);
    }
}
exports.Conflict = Conflict;
//# sourceMappingURL=conflict.js.map