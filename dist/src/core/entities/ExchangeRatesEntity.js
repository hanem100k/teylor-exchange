"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesEntity = void 0;
const typeorm_1 = require("typeorm");
// table was created for: referencing a blueprint for creating user modes. Entity name was chosen by the stakeholders to refer to a mode of operation by a device
// each row: will describe and define options for creating user modes
let ExchangeRatesEntity = class ExchangeRatesEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ExchangeRatesEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        type: "date",
        comment: "timestamp"
    }),
    __metadata("design:type", Date)
], ExchangeRatesEntity.prototype, "rateAt", void 0);
__decorate([
    typeorm_1.PrimaryColumn({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], ExchangeRatesEntity.prototype, "symbol", void 0);
__decorate([
    typeorm_1.Column({ type: "double" }),
    __metadata("design:type", Number)
], ExchangeRatesEntity.prototype, "exchange_rate", void 0);
ExchangeRatesEntity = __decorate([
    typeorm_1.Entity("exchange_rates")
], ExchangeRatesEntity);
exports.ExchangeRatesEntity = ExchangeRatesEntity;
//# sourceMappingURL=ExchangeRatesEntity.js.map