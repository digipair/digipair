"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = error;
function error(label, value) {
    if (value === void 0) { value = ''; }
    throw new Error("[PRONOTE] ".concat(label, ": ").concat(value));
}
