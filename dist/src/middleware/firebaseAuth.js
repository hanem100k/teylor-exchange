"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseAuthCheck = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const unauthorized_1 = require("../errors/unauthorized");
const logger_1 = __importDefault(require("../logger"));
function firebaseAuthCheck(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const unauthorizedErr = new unauthorized_1.UnauthorizedError();
        // Google GKE engine will do a healtcheck on the root path, looking for a 200 response, leave this in place until
        // a proper liveliness probe is configured
        if (req.url === '/') {
            return res.json({});
        }
        if (req.headers.authorization) {
            try {
                const token = req.headers.authorization;
                const verifiedToken = yield firebase_admin_1.default.auth().verifyIdToken(token);
                req.body.firebaseId = verifiedToken.uid;
                return next();
            }
            catch (error) {
                logger_1.default.error('Authentication Error: ', error);
                return res.status(403).json(unauthorizedErr);
            }
        }
        else {
            return res.status(403).json(unauthorizedErr);
        }
    });
}
exports.firebaseAuthCheck = firebaseAuthCheck;
//# sourceMappingURL=firebaseAuth.js.map