"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.createEmployee = exports.getEmployee = exports.getEmployees = void 0;
const employees = [
    {
        name: 'Eduard Zurin',
        title: 'Intern',
        tribe: 0
    },
    {
        name: 'Mark Mets',
        title: 'Software Engineer',
        tribe: 1
    },
    {
        name: 'Litman Huang',
        title: 'Team Lead',
        tribe: 2
    },
];
async function getEmployees() {
    return structuredClone(employees);
}
exports.getEmployees = getEmployees;
async function getEmployee(id) {
    return structuredClone(employees[id]);
}
exports.getEmployee = getEmployee;
async function createEmployee(employee) {
    const newEmployee = {
        name: employee.name,
        title: employee.title,
        tribe: employee.tribe,
    };
    try {
        employees.push(structuredClone(newEmployee));
    }
    catch (error) {
        console.log(error);
    }
    return newEmployee;
}
exports.createEmployee = createEmployee;
async function deleteEmployee(id) {
    structuredClone(employees.splice(id, 1));
}
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=employees.model.js.map