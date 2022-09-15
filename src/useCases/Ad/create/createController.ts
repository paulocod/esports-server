import { Request, Response } from "express";
import { CreateAdUseCase } from "./createUseCase";

export class CreateAdsController {
  constructor(
    private createAdsUseCase: CreateAdUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { gameId } = request.params
    const {
      name,
      yearsPlaying,
      discord,
      weekDays,
      hoursStart,
      hourEnd,
      useVoiceChannel,
    } = request.body

    try {
      await this.createAdsUseCase.execute({
        gameId,
        name,
        yearsPlaying,
        discord,
        weekDays,
        hoursStart,
        hourEnd,
        useVoiceChannel,
      })
      return response.status(201).send(request.body)

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}