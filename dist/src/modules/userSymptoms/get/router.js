"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSymptoms = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetUserSymptomsController_1 = require("./GetUserSymptomsController");
const controller = new GetUserSymptomsController_1.GetUserSymptomsController();
const router = express_1.Router();
exports.getUserSymptoms = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map