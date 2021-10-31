import {Router} from 'express'
import { authenticateRouter } from './authenticate.routes'
import { messageRouter } from './message.routes'
import { profileUserRouter } from './profileUser.routes'




const routes = Router()

routes.use("/authenticate", authenticateRouter)
routes.use("/message", messageRouter)
routes.use("/profile", profileUserRouter)

export  {routes}