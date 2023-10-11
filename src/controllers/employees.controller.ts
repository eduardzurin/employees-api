import * as employeeModel from '../models/employees.model';


export async function getEmployees(){
    try{
        return await employeeModel.getEmployees();

    } catch(error){
        throw new Error("something went wrong");
    }

}

export async function getEmployee(id: number){
    try{
        return await employeeModel.getEmployee(id);

    } catch(error){
        throw new Error("something went wrong");
    }
}

export async function deleteEmployee(id: number){
    try{
        await employeeModel.deleteEmployee(id);

    } catch(error){
        throw new Error("something went wrong");
    }
}

export async function createEmployee(employee: {name: string, title: string, tribe: number}){
    try{
        return await employeeModel.createEmployee(employee);

    } catch(error){
        throw new Error("something went wrong");
    }
}


