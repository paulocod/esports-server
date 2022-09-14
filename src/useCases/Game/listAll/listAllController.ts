import { Request, Response } from "express";
import { ListAllGameUseCase } from "./listAllUseCase";

export class ListAllGameController {
  constructor(
    private listAllGameUseCase: ListAllGameUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const games = await this.listAllGameUseCase.execute()
      return response.status(201).send(games)

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}