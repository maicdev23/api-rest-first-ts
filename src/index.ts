import dotenv from 'dotenv/config';
if(process.env.NODE_ENV === 'production'){ dotenv }

import { Servidor } from "./server";
import { dbconnection } from "./config/database";

const server = new Servidor()

async function main() {
    await server.listen()
    await dbconnection()
} main();