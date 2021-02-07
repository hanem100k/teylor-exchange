"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUserModePresets = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const ChangeModeObjectPresetController_1 = require("./ChangeModeObjectPresetController");
const controller = new ChangeModeObjectPresetController_1.ChangeModeObjectPresetController();
const router = express_1.Router();
exports.changeUserModePresets = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map