
import {Router} from 'express'
import { ProfileUserController } from '../controller/ProfileUserController'
import { isAuthenticate } from '../middleware/ensureAuthenticated'



const profileUserRouter = Router()

const profileUserController = new ProfileUserController()



profileUserRouter.get("/", isAuthenticate, profileUserController.handle)

export{profileUserRouter}