"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFirebaseUsers = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const UpdateUsersController_1 = require("./UpdateUsersController");
const controller = new UpdateUsersController_1.UpdateUsersController();
const router = express_1.Router();
exports.updateFirebaseUsers = router;
router.post(constants_1.METHOD_URL, controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map