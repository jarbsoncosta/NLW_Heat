import {Router} from 'express'
import { authenticateRouter } from './authenticate.routes'




const routes = Router()

routes.use("/authenticate", authenticateRouter)

export  {routes}