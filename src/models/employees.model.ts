
interface Employee{
    name: string;
    title: string;
    tribe: number;
}

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
        tribe: employee.tribe,
    }
    try{
        employees.push(structuredClone(newEmployee))
    } catch(error){
        console.log(error)
    }
    return newEmployee
}

export async function deleteEmployee(id: number){
    structuredClone(employees.splice(id, 1));
}

export { Employee };
