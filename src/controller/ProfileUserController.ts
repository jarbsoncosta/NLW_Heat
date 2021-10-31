import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";



class ProfileUserController {
  async handle(request: Request, response: Response) {
    const {user_id} = request.user
    const profileUserService = new ProfileUserService()

    const result = await profileUserService.execute(user_id)

    return response.json(result)
  
  }
}
export { ProfileUserController }
