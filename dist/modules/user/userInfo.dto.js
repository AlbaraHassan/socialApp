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
exports.UserInfoDTO = void 0;
const class_validator_1 = require("class-validator");
class UserInfoDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Place of birth is required" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserInfoDTO.prototype, "placeOfBirth", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Address is required" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserInfoDTO.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name is required" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserInfoDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Age is required" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserInfoDTO.prototype, "age", void 0);
exports.UserInfoDTO = UserInfoDTO;
//# sourceMappingURL=userInfo.dto.js.map