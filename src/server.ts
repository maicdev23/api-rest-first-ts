import express from 'express';

import router from './routes'

const port = process.env.PORT

export class Servidor{
    app: express.Application
    
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.use('/', router)
    }

    listen(){
        this.app.listen(port, () => {
            console.log(`Servidor a su servicio en el puerto ${port}`)
        }
    )}
}