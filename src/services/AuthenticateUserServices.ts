import axios from 'axios';
import { response } from 'express';


/* 
*Receber code(string)
*Recuperar o access_token no github
*Recuperar Infos do User no gitHub 
*Verificar se o usuario existe no banco de dados
----Sim = Gerar um token
----Não= Criar no DB, gerar um token
*Recuperar o token com as infos do user
*
*/

interface IAccessTokenResponse{
    access_token:string

}

interface IUserResponse{
    avatar_url:string,
    login:string,
    id:string,
    name:string
}

class AuthenticateUserServices{

    async execute(code:string){
        const url = "https://github.com/login/oauth/access_token";

        const{data:accessTokenResponse} = await axios.post<IAccessTokenResponse>(url, null, {
            params:{
                client_id:process.env.GITHUB_CLIENT_ID,
                client_secret:process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers:{
                "Accept":"application/json"
            }
        })

        //recuperando infos do usuario 
        const response = await axios.get<IUserResponse>("https://api.github.com/user",{
            headers:{
                authorization:`Bearer ${accessTokenResponse.access_token}`
            }
        })

        return response.data

      


    }

}

export {AuthenticateUserServices}