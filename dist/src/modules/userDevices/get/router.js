"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDevices = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetUserDevicesController_1 = require("./GetUserDevicesController");
const controller = new GetUserDevicesController_1.GetUserDevicesController();
const router = express_1.Router();
exports.getUserDevices = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map