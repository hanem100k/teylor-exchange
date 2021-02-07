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
exports.GetAllNeedsController = void 0;
const Controller_1 = require("../../../system/Controller");
const GetAllNeedsInteractor_1 = require("./GetAllNeedsInteractor");
class GetAllNeedsController extends Controller_1.Controller {
    constructor() {
        super();
        this.interactor = new GetAllNeedsInteractor_1.GetAllNeedsInteractor();
    }
    handler() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const responseModel = yield this.interactor.exec(req.body);
            res.responseModel = responseModel;
            next();
        });
    }
}
exports.GetAllNeedsController = GetAllNeedsController;
//# sourceMappingURL=GetAllNeedsController.js.map