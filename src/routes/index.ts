import { FastifyInstance } from "fastify";

import getEmployee from "./get-employee";
import getEmployees from "./get-employees";

export default async function(fastify: FastifyInstance){
    fastify.route(getEmployees(fastify))
    fastify.route(getEmployee(fastify))
}