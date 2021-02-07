"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserNeeds = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetUserNeedsController_1 = require("./GetUserNeedsController");
const controller = new GetUserNeedsController_1.GetUserNeedsController();
const router = express_1.Router();
exports.getUserNeeds = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map