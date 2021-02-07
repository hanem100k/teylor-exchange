"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevicePairing = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetDevicePairingsController_1 = require("./GetDevicePairingsController");
const controller = new GetDevicePairingsController_1.GetDevicePairingsController();
const router = express_1.Router();
exports.getDevicePairing = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map