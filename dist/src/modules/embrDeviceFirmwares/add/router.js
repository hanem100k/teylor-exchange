"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDeviceFirmware = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddDeviceFirmwaresController_1 = require("./AddDeviceFirmwaresController");
const controller = new AddDeviceFirmwaresController_1.AddDeviceFirmwaresController();
const router = express_1.Router();
exports.addDeviceFirmware = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map