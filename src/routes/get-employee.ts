import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesController from '../controllers/employees.controller';
import { employeeIdSchema, employeeIdType } from './schemas/employee.schema';

export default function getPosts(fastify: FastifyInstance): RouteOptions {
    return {
      method: "GET",
      url: "/api/employees/:id",
      schema:{
          params: employeeIdSchema,
      },
      handler: async (request, reply): Promise<void> => {
        const params = request.params as employeeIdType;
        const employee = await employeesController.getEmployee(params.id);
  
        if (!employee){
          reply.code(404).send({ message: "Post not found" });
        }
        else{
          reply.code(200).send({ employee });
        }
      },
    };
  }