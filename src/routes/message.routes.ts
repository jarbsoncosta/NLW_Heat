import {Router} from 'express'
import { CreateMessageController } from '../controller/CreateMessageController'
import { isAuthenticate } from '../middleware/ensureAuthenticated'



const messageRouter = Router()

const createMessageController = new CreateMessageController()


messageRouter.post("/", isAuthenticate, createMessageController.handle)

export{messageRouter}