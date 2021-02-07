"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfiles = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const UpdateUserProfilesController_1 = require("./UpdateUserProfilesController");
const controller = new UpdateUserProfilesController_1.UpdateUserProfilesController();
const router = express_1.Router();
exports.updateUserProfiles = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map