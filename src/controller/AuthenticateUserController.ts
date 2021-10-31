import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";



class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const authenticateUserServices = new AuthenticateUserService()
    try {
      const { code } = request.body


      const result = await authenticateUserServices.execute(code)

      return response.json(result)

    } catch (err) {
      return response.json({ error: err.message })

    }
  }
}
export { AuthenticateUserController }
