"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllModes = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetAllModesController_1 = require("./GetAllModesController");
const controller = new GetAllModesController_1.GetAllModesController();
const router = express_1.Router();
exports.getAllModes = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map