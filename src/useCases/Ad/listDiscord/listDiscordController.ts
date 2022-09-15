import { Request, Response } from "express";
import { ListDiscordAdsUseCase } from "./listDiscordUseCase";

export class ListDiscordAdsController {
  constructor(
    private listDiscordAdsUseCase: ListDiscordAdsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const ads = await this.listDiscordAdsUseCase.execute({
        id
      })
      return response.status(201).send(ads)

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}