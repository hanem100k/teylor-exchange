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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretReader = void 0;
const secret_manager_1 = require("@google-cloud/secret-manager");
// TODO create a local cache for secrets
class SecretReader {
    constructor() {
        this.GCP_PROJECT = process.env.GOOGLE_CLOUD_PROJECT || 'eden-development';
        this.secretManagerClient = new secret_manager_1.SecretManagerServiceClient();
    }
    getSecretValue(secret, version = 'latest') {
        return __awaiter(this, void 0, void 0, function* () {
            const [vs] = yield this.secretManagerClient.accessSecretVersion({
                name: `projects/${this.GCP_PROJECT}/secrets/${secret}/versions/${version}`
            });
            const payload = vs.payload.data.toString('utf8');
            return payload;
        });
    }
}
exports.SecretReader = SecretReader;
//# sourceMappingURL=SecretsManager.js.map