"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserProfiles = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const AddUserProfilesController_1 = require("./AddUserProfilesController");
const controller = new AddUserProfilesController_1.AddUserProfilesController();
const router = express_1.Router();
exports.addUserProfiles = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map