"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDevicePairing = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const UpdateDevicePairingsController_1 = require("./UpdateDevicePairingsController");
const controller = new UpdateDevicePairingsController_1.UpdateDevicePairingsController();
const router = express_1.Router();
exports.updateDevicePairing = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map