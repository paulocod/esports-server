import { Request, Response } from "express";
import { ListAllUserUseCase } from "./listAllUseCase";

export class ListAllUserController {
  constructor(
    private listAllUserUseCase: ListAllUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.listAllUserUseCase.execute()
      return response.status(201).send(users)

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}