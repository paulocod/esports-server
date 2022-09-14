import { Request, Response } from "express";
import { CreateGameUseCase } from "./createUseCase";

export class CreateGameController {
  constructor(
    private createGameUseCase: CreateGameUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, bannerUrl } = request.body

    try {
      await this.createGameUseCase.execute({
        title,
        bannerUrl,
      })
      return response.status(201).send()

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}