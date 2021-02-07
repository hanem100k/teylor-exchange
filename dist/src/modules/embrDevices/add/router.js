"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEmbrDevice = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddEmbrDeviceController_1 = require("./AddEmbrDeviceController");
const controller = new AddEmbrDeviceController_1.AddEmbrDeviceController();
const router = express_1.Router();
exports.addEmbrDevice = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map