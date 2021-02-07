"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserModes = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const DeleteUserModesController_1 = require("./DeleteUserModesController");
const controller = new DeleteUserModesController_1.DeleteUserModesController();
const router = express_1.Router();
exports.deleteUserModes = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map