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
exports.Controller = void 0;
const bad_request_1 = require("../errors/bad-request");
const util_1 = require("./util");
class Controller {
    constructor() {
        this.preHandler = (options) => (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if ((_a = options === null || options === void 0 ? void 0 : options.validation) === null || _a === void 0 ? void 0 : _a.body) {
                const { error } = (_b = options === null || options === void 0 ? void 0 : options.validation) === null || _b === void 0 ? void 0 : _b.body.validate(req.body);
                if (error) {
                    return next(new bad_request_1.BadRequestError(util_1.getMessageFromJoiError(error)));
                }
            }
            return next();
        });
    }
    handler() { }
    reply() {
        return (req, res) => {
            const { responseModel } = res;
            res.json(responseModel);
        };
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map