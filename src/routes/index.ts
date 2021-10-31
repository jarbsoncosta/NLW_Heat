import {Router} from 'express'
import { authenticateRouter } from './authenticate.routes'
import { messageRouter } from './message.routes'




const routes = Router()

routes.use("/authenticate", authenticateRouter)
routes.use("/message", messageRouter)

export  {routes}