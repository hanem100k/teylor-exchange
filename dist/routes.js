"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const openapi_json_js_1 = __importDefault(require("../openapi.json.js"));
const router_1 = require("./modules/hello/greet/router");
const swaggerUiOptions = {
    customCss: '.swagger-ui .topbar { display: none }'
};
const router = express_1.Router();
router.use('/', router_1.greet);
// Dev routes
if (process.env.NODE_ENV === 'development') {
    router.use('/dev/api-docs', swagger_ui_express_1.default.serve);
    router.get('/dev/api-docs', swagger_ui_express_1.default.setup(openapi_json_js_1.default, swaggerUiOptions));
}
exports.default = router;
//# sourceMappingURL=routes.js.map