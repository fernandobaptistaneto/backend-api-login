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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Users.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "deleted", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "updated",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Users.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "username", length: 80 }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "password", nullable: true, length: 80 }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { name: "json_data", nullable: true }),
    __metadata("design:type", Object)
], Users.prototype, "jsonData", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Index)("users_id_idx", ["id"], {}),
    (0, typeorm_1.Index)("users_pk", ["username"], { unique: true }),
    (0, typeorm_1.Entity)("users", { schema: "public" })
], Users);
//# sourceMappingURL=Users.js.map