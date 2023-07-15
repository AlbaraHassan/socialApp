"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    SECRET: process.env.JWT_SECRET,
    SALT: process.env.HASH_SALT || 10,
});
//# sourceMappingURL=appConfig.service.js.map