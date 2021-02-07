"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserNeeds = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddUserNeedsController_1 = require("./AddUserNeedsController");
const controller = new AddUserNeedsController_1.AddUserNeedsController();
const router = express_1.Router();
exports.addUserNeeds = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map