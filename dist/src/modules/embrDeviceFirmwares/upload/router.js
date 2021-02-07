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
exports.uploadDeviceFirmware = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const constants_1 = require("./constants");
const UploadDeviceFirmwaresController_1 = require("./UploadDeviceFirmwaresController");
const bad_request_1 = require("../../../errors/bad-request");
const controller = new UploadDeviceFirmwaresController_1.UploadDeviceFirmwaresController();
const multer = multer_1.default({
    storage: multer_1.default.memoryStorage(),
    limits: {
        fileSize: 0.5 * 1024 * 1024 // no larger than 500K. Firmware size is 140K at the time of writing.
    },
    fileFilter: (req, file, cb) => __awaiter(void 0, void 0, void 0, function* () {
        // allow only zip files, firmware service has an upper bound of 3 megs
        // inside gateways we validate auth and the file and proxy it towards firmware service
        const allowedMimeType = "application/zip";
        if (file.mimetype !== allowedMimeType) {
            return cb(new bad_request_1.BadRequestError("Mimetype should be " + allowedMimeType));
        }
        return cb(null, true);
    })
});
const router = express_1.Router();
exports.uploadDeviceFirmware = router;
router.post(constants_1.METHOD_URL, multer.single("firmware"), controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map