"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDevicePairing = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddDevicePairingsController_1 = require("./AddDevicePairingsController");
const controller = new AddDevicePairingsController_1.AddDevicePairingsController();
const router = express_1.Router();
exports.addDevicePairing = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map