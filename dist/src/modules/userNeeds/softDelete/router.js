"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserNeeds = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const DeleteUserNeedsController_1 = require("./DeleteUserNeedsController");
const controller = new DeleteUserNeedsController_1.DeleteUserNeedsController();
const router = express_1.Router();
exports.deleteUserNeeds = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map