"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSymptoms = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetAllSymptomsController_1 = require("./GetAllSymptomsController");
const controller = new GetAllSymptomsController_1.GetAllSymptomsController();
const router = express_1.Router();
exports.getAllSymptoms = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map