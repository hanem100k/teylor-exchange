"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPreRoutes = void 0;
const firebaseAuth_1 = require("./firebaseAuth");
function initPreRoutes(router) {
    // global auth check, consider moving this into individual controllers in case we will work with multiple auth providers
    router.use('/', firebaseAuth_1.firebaseAuthCheck);
}
exports.initPreRoutes = initPreRoutes;
//# sourceMappingURL=index.js.map