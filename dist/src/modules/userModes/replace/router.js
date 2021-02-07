"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceUserModes = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const ReplaceUserModesController_1 = require("./ReplaceUserModesController");
const controller = new ReplaceUserModesController_1.ReplaceUserModesController();
const router = express_1.Router();
exports.replaceUserModes = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map