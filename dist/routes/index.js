"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_employee_1 = __importDefault(require("./get-employee"));
const get_employees_1 = __importDefault(require("./get-employees"));
async function default_1(fastify) {
    fastify.route((0, get_employees_1.default)(fastify));
    fastify.route((0, get_employee_1.default)(fastify));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map