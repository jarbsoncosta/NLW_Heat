
import {Router} from 'express'
import { CreateMessageController } from '../controller/CreateMessageController'
import { GetLast3MessagesController } from '../controller/GetLast3MessagesController'
import { isAuthenticate } from '../middleware/ensureAuthenticated'



const messageRouter = Router()

const createMessageController = new CreateMessageController()
const getLast3MessagesController = new GetLast3MessagesController()


messageRouter.post("/", isAuthenticate, createMessageController.handle)
messageRouter.get("/last3", getLast3MessagesController.handle)

export{messageRouter}