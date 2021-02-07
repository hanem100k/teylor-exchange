"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNeeds = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetAllNeedsController_1 = require("./GetAllNeedsController");
const controller = new GetAllNeedsController_1.GetAllNeedsController();
const router = express_1.Router();
exports.getAllNeeds = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map