"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
// Todo generate token
describe.skip("App Test", () => {
    test("GET /random-url should return 404", done => {
        supertest_1.default(app_1.app).get("/reset").expect(404, done);
    });
    test("GET /hello should return 404, due to wrong http method", done => {
        supertest_1.default(app_1.app).get("/hello/").expect(404, done);
    });
    test("POST /hello should return 200", done => {
        supertest_1.default(app_1.app).post("/hello").send({ name: "john" }).expect(200, done);
    });
});
//# sourceMappingURL=app.test.js.map