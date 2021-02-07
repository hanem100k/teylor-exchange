"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNeeds = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddNeedsController_1 = require("./AddNeedsController");
const controller = new AddNeedsController_1.AddNeedsController();
const router = express_1.Router();
exports.addNeeds = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map