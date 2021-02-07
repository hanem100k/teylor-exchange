"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
exports.app = express_1.default();
exports.router = express_1.default.Router();
exports.app.use(compression_1.default());
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.set('port', process.env.PORT || 8080);
exports.app.use(express_1.default.static(path_1.default.join(__dirname, 'public'), { maxAge: 31557600000 }));
exports.app.use(routes_1.default);
exports.app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    return res.status(err.status || 500).json({
        error: process.env.NODE_ENV === 'development' ? err : undefined,
        message: err.message
    });
});
//# sourceMappingURL=app.js.map