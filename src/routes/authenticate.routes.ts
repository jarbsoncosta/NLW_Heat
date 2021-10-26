import {Router} from 'express'
import { AuthenticateUserController } from '../controller/AuthenticateUserController'



const authenticateRouter = Router()

const authenticateUserController = new AuthenticateUserController()


authenticateRouter.post("/", authenticateUserController.handle)

export{authenticateRouter}