"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTribe = exports.getTribes = void 0;
const tribes = [
    {
        name: "InternStellar",
        department: "Other engineering"
    },
    {
        name: "Billing",
        department: "Engineering"
    },
    {
        name: "Gears",
        department: "Some department"
    }
];
async function getTribes() {
    return structuredClone(tribes);
}
exports.getTribes = getTribes;
async function getTribe(id) {
    return structuredClone(tribes[id]);
}
exports.getTribe = getTribe;
//# sourceMappingURL=tribes.model.js.map