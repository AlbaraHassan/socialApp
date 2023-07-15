"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = void 0;
const exclude = (object, ...keys) => {
    for (const key of keys) {
        delete object[key];
    }
    return object;
};
exports.exclude = exclude;
//# sourceMappingURL=helpers.js.map