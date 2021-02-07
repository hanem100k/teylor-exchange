"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllModeObjectsUnfiltered = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetAllModeObjectsController_1 = require("./GetAllModeObjectsController");
const controller = new GetAllModeObjectsController_1.GetAllModeObjectsController();
const router = express_1.Router();
exports.getAllModeObjectsUnfiltered = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map