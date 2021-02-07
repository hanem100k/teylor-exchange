"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, colorize } = winston_1.format;
const logTransports = [
    new winston_1.transports.Console({
        level: "info",
        format: winston_1.format.combine(winston_1.format.printf(options => {
            const { level, message, timestamp } = options, metadata = __rest(options, ["level", "message", "timestamp"]);
            let msg = `${timestamp} [${level}] - ${metadata.service} - ${message} : `;
            // If we extend metadata, we might just append the string to the end
            if (metadata && Object.keys(metadata).length > 1) {
                delete metadata.service;
                msg += JSON.stringify(metadata, null, 2);
            }
            return msg;
        }))
    })
];
exports.logger = winston_1.createLogger({
    format: combine(colorize(), timestamp()),
    transports: logTransports,
    defaultMeta: { service: "exchangeService" }
});
//# sourceMappingURL=logger.js.map