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
exports.firebaseInitApp = exports.getSecrets = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const SecretsManager_1 = require("../system/SecretsManager");
function getSecrets() {
    return __awaiter(this, void 0, void 0, function* () {
        // we don't need to cache these values, so using secret reader directly instead of the cache
        // when the closure gets collected, these will clear out of memory.
        const reader = new SecretsManager_1.SecretReader();
        const [firebaseServiceAccount, projectId] = yield Promise.all([
            reader.getSecretValue(process.env.FIREBASE_SERVICE_ACCOUNT),
            reader.getSecretValue(process.env.GCP_PROJECT_ID)
        ]);
        return {
            serviceAccount: firebaseServiceAccount,
            projectId
        };
    });
}
exports.getSecrets = getSecrets;
function firebaseInitApp(serviceAccount, projectId) {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(JSON.parse(serviceAccount)),
        databaseURL: `https://${projectId}.firebaseio.com`
    });
}
exports.firebaseInitApp = firebaseInitApp;
//# sourceMappingURL=utils.js.map