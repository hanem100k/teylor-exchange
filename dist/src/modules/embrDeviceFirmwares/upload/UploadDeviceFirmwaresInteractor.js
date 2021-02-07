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
exports.UploadDeviceFirmwaresInteractor = void 0;
const superagent_1 = __importDefault(require("superagent"));
const Interactor_1 = require("../../../system/Interactor");
const constants_1 = require("./constants");
const errorFactory_1 = require("../../module-utils/errorFactory");
const bad_request_1 = require("../../../errors/bad-request");
class UploadDeviceFirmwaresInteractor extends Interactor_1.Interactor {
    exec(requestModel) {
        return __awaiter(this, void 0, void 0, function* () {
            // const secretCache = SecretCacheProvider.getInstance();
            // const firmwareServiceUrl = await secretCache.getSingleSecret(
            //   process.env.FIRMWARE_SERVICE_HOSTNAME
            // );
            try {
                // console.log("inside here INTERACTOR", requestModel);
                console.log("inside file filter");
                if (!requestModel.file) {
                    throw new bad_request_1.BadRequestError("Missing Firmware file!");
                }
                const firmwareServiceUrl = "localhost:8081/";
                console.log("this is req.file", requestModel.file);
                console.log("this is the url", firmwareServiceUrl + constants_1.METHOD_NAME);
                requestModel.firebaseId = "hanem";
                requestModel.file.buffer = requestModel.file.buffer.toString("base64");
                const res = yield superagent_1.default
                    .post(firmwareServiceUrl + constants_1.METHOD_NAME)
                    .send({ file: requestModel.file });
                console.log("this is res", res);
                return res.body;
            }
            catch (err) {
                console.log("this is err", err);
                const customErr = errorFactory_1.createHttpError(err);
                throw customErr;
            }
        });
    }
}
exports.UploadDeviceFirmwaresInteractor = UploadDeviceFirmwaresInteractor;
//# sourceMappingURL=UploadDeviceFirmwaresInteractor.js.map