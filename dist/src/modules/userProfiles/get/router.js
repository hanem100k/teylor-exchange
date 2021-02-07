"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfiles = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const GetUserProfilesController_1 = require("./GetUserProfilesController");
const controller = new GetUserProfilesController_1.GetUserProfilesController();
const router = express_1.Router();
exports.getUserProfiles = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map