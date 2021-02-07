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
exports.SecretCacheProvider = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const SecretsManager_1 = require("./SecretsManager");
class SecretCacheProvider {
    constructor() {
        this.secretReader = new SecretsManager_1.SecretReader();
        this.cache = new node_cache_1.default({ stdTTL: 6000, checkperiod: 6020 });
    }
    static getInstance() {
        if (!SecretCacheProvider.instance) {
            SecretCacheProvider.instance = new SecretCacheProvider();
        }
        return SecretCacheProvider.instance;
    }
    getSingleSecret(secret, version) {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedSecret = this.cache.get(secret);
            if (!cachedSecret) {
                const secFromReader = yield this.secretReader.getSecretValue(secret, version);
                this.cache.set(secret, secFromReader);
                return secFromReader;
            }
            return cachedSecret;
        });
    }
}
exports.SecretCacheProvider = SecretCacheProvider;
//# sourceMappingURL=SecretCacheProvider.js.map