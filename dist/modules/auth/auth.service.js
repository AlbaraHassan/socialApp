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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwtHelper_1 = require("../../core/helpers/jwtHelper");
const bcrypt = require("bcrypt");
const appConfig_service_1 = require("../../core/config/appConfig.service");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService, jwt, config) {
        this.userService = userService;
        this.jwt = jwt;
        this.config = config;
    }
    async register(_a) {
        var { password } = _a, data = __rest(_a, ["password"]);
        const hashedPassword = await bcrypt.hash(password, this.config.rounds);
        return this.userService.create(Object.assign(Object.assign({}, data), { password: hashedPassword }));
    }
    async login({ email, password }) {
        const { password: savedPassword, role, id } = await this.userService.getByEmail(email);
        if (!id || !await bcrypt.compare(password, savedPassword)) {
            throw new common_1.UnauthorizedException();
        }
        return { accessToken: await this.jwt.sign({ email, role, id }) };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService, jwtHelper_1.JwtHelper,
        appConfig_service_1.AppConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map