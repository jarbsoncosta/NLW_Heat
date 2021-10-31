
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload{
    sub: string;
    iat: number,
    exp: number,
}

export async function isAuthenticate(request:Request, response:Response, next:NextFunction):Promise<void>{
   
    const authHeader = request.headers.authorization

    if(!authHeader){
        response.status(401).json({errorCode:"Não Autorizdo"})
    }
    const [, token] = authHeader.split(' ')
    
    try {
        const decodedToken = verify(token, process.env.JWT_SECRET) 
        

        const { sub:id} = decodedToken as IPayload

        request.user ={
            user_id:id
        }

      return next()
        
    } catch  {
        response.status(401).json({errorCode:"Token Invalido"})
        
    }
}