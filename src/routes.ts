import { Express , Request , Response } from "express" ; 
import { createUserSessionHandler } from "./controller/sessionController";
import { createUserHandler } from "./controller/userController";
import validateResource from "./middleware/validateResources"
import{createUserSchema} from "./schema/user.schema"
import {createSessionSchema} from "./schema/session.schema"

function routes(app: Express){
    app.get("/healthcheck", (req:Request, res:Response) => res.sendStatus(200)) ;

    app.post('/api/users',validateResource(createUserSchema),createUserHandler) ; 
    
    app.post('/api/sessions',validateResource(createSessionSchema),createUserSessionHandler) ; 
}

export default routes ;