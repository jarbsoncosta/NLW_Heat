import 'dotenv/config'
import express from 'express'
import http from "http"
import cors from 'cors'
import {Server} from 'socket.io'

import {routes} from './routes'


const app = express()

app.use(cors())
const serverHttp = http.createServer(app)



// crinado servidor http e abilitando cors para que outra aplicação tenha acesso a api
const io = new Server(serverHttp, {
    cors:{
        origin: "*"
    }
})

// evento de conecxao dosocket
io.on("connection", socket =>{
    console.log(`usuario conectado no socket ${socket.id}`)
})

app.use(express.json())
app.use(routes)



app.get("/github", (request, response)=>{
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get("/signin/callback",(request, response)=>{
    const{code}= request.query
    return response.json(code)
})


export {serverHttp, io}