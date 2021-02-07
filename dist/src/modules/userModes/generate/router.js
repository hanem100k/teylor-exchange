"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserModes = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GenerateUserModesController_1 = require("./GenerateUserModesController");
const controller = new GenerateUserModesController_1.GenerateUserModesController();
const router = express_1.Router();
exports.generateUserModes = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map