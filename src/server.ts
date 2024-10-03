import express from "express";
import cors from "cors";

import router from './routes'

const port = process.env.PORT || 4000

export class Servidor {
    app: express.Application

    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/', router)
    }

    listen() {
        this.app.listen(port, () => {
            console.log(`Servidor a su servicio en el puerto ${port}`)
        })
    }
}