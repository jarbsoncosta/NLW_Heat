import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";




class CreateMessageController {
  async handle(request: Request, response: Response) {
    const createMessageService = new CreateMessageService()
    try {
      const {user_id} = request.user
      const {message} = request.body
      const result = await createMessageService.execute(message, user_id)

      return response.json(result)

    } catch (err) {
      return response.json({ error: err.message })

    }
  }
}
export { CreateMessageController }
