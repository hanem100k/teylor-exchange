"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_error_1 = require("../../errors/application-error");
describe("ApplicationError test suite", () => {
    test("sets default error message", () => {
        const error = new application_error_1.ApplicationError();
        expect(error.message).toBe("ApplicationError");
    });
    test("sets correct message", () => {
        const message = "error message";
        const error = new application_error_1.ApplicationError(message);
        expect(error.message).toBe(message);
    });
    test("sets 500 as default status code", () => {
        const message = "error message";
        const error = new application_error_1.ApplicationError(message);
        expect(error.status).toBe(500);
    });
    test("sets correct status", () => {
        const message = "error message";
        const status = 400;
        const error = new application_error_1.ApplicationError(message, status);
        expect(error.status).toBe(status);
    });
});
//# sourceMappingURL=ApplicationError.test.js.map