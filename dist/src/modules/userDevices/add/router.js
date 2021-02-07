"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserDevices = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddUserDevicesController_1 = require("./AddUserDevicesController");
const controller = new AddUserDevicesController_1.AddUserDevicesController();
const router = express_1.Router();
exports.addUserDevices = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map