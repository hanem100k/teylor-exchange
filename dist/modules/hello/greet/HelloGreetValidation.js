"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloGreetSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.helloGreetSchema = joi_1.default.object().keys({
    name: joi_1.default.string().required()
});
//# sourceMappingURL=HelloGreetValidation.js.map