"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const role_enum_1 = require("../user/roles/role.enum");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../user/roles/roles.guard");
const roles_decorator_1 = require("../user/roles/roles.decorator");
function Auth(roles) {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard), roles ? (0, roles_decorator_1.Roles)(roles) : (0, roles_decorator_1.Roles)([role_enum_1.Role.ADMIN, role_enum_1.Role.USER]));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map