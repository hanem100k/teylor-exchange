"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserModes = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddUserModesController_1 = require("./AddUserModesController");
const controller = new AddUserModesController_1.AddUserModesController();
const router = express_1.Router();
exports.addUserModes = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map