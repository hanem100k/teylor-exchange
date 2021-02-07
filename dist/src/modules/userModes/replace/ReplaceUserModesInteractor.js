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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceUserModesInteractor = void 0;
const superagent_1 = __importDefault(require("superagent"));
const Interactor_1 = require("../../../system/Interactor");
const constants_1 = require("./constants");
const SecretCacheProvider_1 = require("../../../system/SecretCacheProvider");
const errorFactory_1 = require("../../module-utils/errorFactory");
class ReplaceUserModesInteractor extends Interactor_1.Interactor {
    exec(requestModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const secretCache = SecretCacheProvider_1.SecretCacheProvider.getInstance();
            const userServiceUrl = yield secretCache.getSingleSecret(process.env.USER_SERVICE_HOSTNAME);
            try {
                const res = yield superagent_1.default.post(userServiceUrl + constants_1.METHOD_NAME).send(requestModel);
                return res.body;
            }
            catch (err) {
                const customErr = errorFactory_1.createHttpError(err);
                throw customErr;
            }
        });
    }
}
exports.ReplaceUserModesInteractor = ReplaceUserModesInteractor;
//# sourceMappingURL=ReplaceUserModesInteractor.js.map