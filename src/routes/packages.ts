import { Router } from "express";
import { registerPackageController } from "../controllers/packages";


const packagesRoutes = Router()



    packagesRoutes.post('/registerPackage',registerPackageController)



    

export default packagesRoutes