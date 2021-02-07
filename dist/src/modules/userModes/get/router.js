"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserModes = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetUserModesController_1 = require("./GetUserModesController");
const controller = new GetUserModesController_1.GetUserModesController();
const router = express_1.Router();
exports.getUserModes = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map