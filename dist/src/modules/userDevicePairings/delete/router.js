"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDevicePairing = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const DeleteDevicePairingsController_1 = require("./DeleteDevicePairingsController");
const controller = new DeleteDevicePairingsController_1.DeleteDevicePairingsController();
const router = express_1.Router();
exports.deleteDevicePairing = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map