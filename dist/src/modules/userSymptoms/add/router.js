"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserSymptoms = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddUserSymptomsController_1 = require("./AddUserSymptomsController");
const controller = new AddUserSymptomsController_1.AddUserSymptomsController();
const router = express_1.Router();
exports.addUserSymptoms = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map