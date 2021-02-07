"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageFromJoiError = void 0;
exports.getMessageFromJoiError = (error) => {
    if (!error.details && error.message) {
        return error.message;
    }
    return error.details && error.details.length > 0 && error.details[0].message
        ? `PATH: [${error.details[0].path}] ;; MESSAGE: ${error.details[0].message}` : undefined;
};
;
//# sourceMappingURL=util.js.map