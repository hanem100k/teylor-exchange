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
exports.HelloController = void 0;
const Controller_1 = require("../../../system/Controller");
const HelloGreetInteractor_1 = require("./HelloGreetInteractor");
class HelloController extends Controller_1.Controller {
    constructor() {
        super();
        this.interactor = new HelloGreetInteractor_1.HelloInteractor();
    }
    handler() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const responseModel = yield this.interactor.exec(req.body);
            res.responseModel = responseModel;
            next();
        });
    }
}
exports.HelloController = HelloController;
//# sourceMappingURL=HelloGreetController.js.map