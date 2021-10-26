import { Request, Response } from "express";
import { AuthenticateUserServices } from "../services/AuthenticateUserServices";



class AuthenticateUserController{
    async handle(request:Request, response:Response){
        const{code}= request.body
        const authenticateUserServices = new AuthenticateUserServices()

       const result=  await authenticateUserServices.execute(code)

       return response.json(result)

    }
}
export{AuthenticateUserController}
