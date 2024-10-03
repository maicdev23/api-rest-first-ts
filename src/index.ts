import { Servidor } from "./server";
import { dbconnection } from "./config/database";

const server = new Servidor()

async function main() {
    await dbconnection()
    server.listen()
} main();