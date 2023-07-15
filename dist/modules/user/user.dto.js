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
exports.ChangePasswordDTO = exports.UserRequestDTO = exports.UserDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const userInfo_dto_1 = require("./userInfo.dto");
class UserDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "User has to have an email !" }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "User has to have a password !" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
exports.UserDTO = UserDTO;
class UserRequestDTO {
}
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UserDTO),
    __metadata("design:type", UserDTO)
], UserRequestDTO.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => userInfo_dto_1.UserInfoDTO),
    __metadata("design:type", userInfo_dto_1.UserInfoDTO)
], UserRequestDTO.prototype, "info", void 0);
exports.UserRequestDTO = UserRequestDTO;
class ChangePasswordDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "User has to have an email !" }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "User must provide old password !" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "oldPassword", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "User must provide new password !" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "newPassword", void 0);
exports.ChangePasswordDTO = ChangePasswordDTO;
//# sourceMappingURL=user.dto.js.map