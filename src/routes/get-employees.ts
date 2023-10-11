import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesController from '../controllers/employees.controller';

export default function getPosts(fastify: FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/api/employees', 
        handler: async (request, reply) => { 
            try {
                const posts = await employeesController.getEmployees(); 
                reply.code(200).send(posts);
            } catch (error) {
                reply.code(500).send({ error: 'Internal Server Error' });
            }
        }
    };
}