import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { createServer } from "http";
import {Server} from 'socket.io'
import { socketController } from '../sockets/controller.js';
//import {createServer as server} from 'http'

// import {router as auth} from '../routes/auth.js'

export class Servidor{
    constructor(){   
        this.app = express()
        this.port = process.env.PORT
        this.server = createServer(this.app)
        this.io =new Server(this.server)

        this.paths = {
        }

        //Middlewares
        this.middlewares()

        //rutas de mi aplicación
        this.routes()

        //Configuración de sockets
        this.sockets()
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //directorio publico
        this.app.use(express.static('public'))

    }

    routes(){
        //this.app.use(this.paths.auth, auth)

    }

    sockets(){
        this.io.on("connection", socketController)

    }

    listen(){        
        this.server.listen(this.port,()=>{
            console.log('servidor corriendo en el puerto', this.port)
        })
    }
 }