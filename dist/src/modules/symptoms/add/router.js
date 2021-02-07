"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSymptoms = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddSymptomsController_1 = require("./AddSymptomsController");
const controller = new AddSymptomsController_1.AddSymptomsController();
const router = express_1.Router();
exports.addSymptoms = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map