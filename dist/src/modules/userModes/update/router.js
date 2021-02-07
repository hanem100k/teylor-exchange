"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserModes = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const UpdateUserModesController_1 = require("./UpdateUserModesController");
const controller = new UpdateUserModesController_1.UpdateUserModesController();
const router = express_1.Router();
exports.updateUserModes = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map