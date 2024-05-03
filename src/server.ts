import express from 'express';
import cors from  'cors';
import { config as dotenvConfig } from 'dotenv';
import packagesRoutes from './routes/packages';



export class Server {

    private app: express.Application;
    constructor(){
        dotenvConfig();
        this.app = express()
    }

    routesConfig(){
        this.app.use('/packages',packagesRoutes)
    }

    
    corsConfig(){
        this.app.use(cors)
    }

    initServer(){
        const port = process.env.SERVER_PORT;
        this.app.listen(port,()=>{
            console.log('Server ready on port: '+ port);
            
        })
    }

}