import * as tribeModel from './tribes.model';

interface Employee{
    name: string;
    title: string;
    tribe: Promise<tribeModel.Tribe>;
}

const employees = [
    {
        name: 'Eduard Zurin',
        title: 'Intern',
        tribe: tribeModel.getTribe(0)
    },
    {
        name: 'Mark Mets',
        title: 'Software Engineer',
        tribe: tribeModel.getTribe(1)
    },
    {
        name: 'Litman Huang',
        title: 'Team Lead',
        tribe: tribeModel.getTribe(2)
    },

]

export async function getEmployees(){
    return structuredClone(employees);
}

export async function getEmployee(id: number){
    return structuredClone(employees[id]);
}

export async function createEmployee(employee: {name: string, title: string, tribe: number}){
    const newEmployee: Employee = {
        name : employee.name,
        title: employee.title,
        tribe: tribeModel.getTribe(employee.tribe)
    }
    employees.push(structuredClone(newEmployee))
    return newEmployee
}