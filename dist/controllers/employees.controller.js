"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = exports.deleteEmployee = exports.getEmployee = exports.getEmployees = void 0;
const employeeModel = __importStar(require("../models/employees.model"));
async function getEmployees() {
    try {
        return await employeeModel.getEmployees();
    }
    catch (error) {
        throw new Error("something went wrong");
    }
}
exports.getEmployees = getEmployees;
async function getEmployee(id) {
    try {
        return await employeeModel.getEmployee(id);
    }
    catch (error) {
        throw new Error("something went wrong");
    }
}
exports.getEmployee = getEmployee;
async function deleteEmployee(id) {
    try {
        await employeeModel.deleteEmployee(id);
    }
    catch (error) {
        throw new Error("something went wrong");
    }
}
exports.deleteEmployee = deleteEmployee;
async function createEmployee(employee) {
    try {
        return await employeeModel.createEmployee(employee);
    }
    catch (error) {
        throw new Error("something went wrong");
    }
}
exports.createEmployee = createEmployee;
//# sourceMappingURL=employees.controller.js.map