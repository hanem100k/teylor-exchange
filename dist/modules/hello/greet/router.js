"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
const express_1 = require("express");
const constants_1 = require("./constants");
const HelloGreetController_1 = require("./HelloGreetController");
const HelloGreetValidation_1 = require("./HelloGreetValidation");
const controller = new HelloGreetController_1.HelloController();
const router = express_1.Router();
exports.greet = router;
router.post(constants_1.METHOD_URL, controller.preHandler({ validation: { body: HelloGreetValidation_1.helloGreetSchema } }), controller.handler(), controller.reply());
//# sourceMappingURL=router.js.map