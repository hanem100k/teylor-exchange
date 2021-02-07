"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/first */
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config();
if (result.error) {
    dotenv_1.default.config({ path: '.env.example' });
}
const app_1 = require("../app");
app_1.app.listen(app_1.app.get('port'), () => {
    console.log('\x1b[36m%s\x1b[0m', // eslint-disable-line
    `🌏 Express server started at http://localhost:${app_1.app.get('port')}`);
    if (process.env.NODE_ENV === 'development') {
        console.log('\x1b[36m%s\x1b[0m', // eslint-disable-line
        `⚙️  Swagger UI hosted at http://localhost:${app_1.app.get('port')}/dev/api-docs`);
    }
});
//# sourceMappingURL=server.js.map