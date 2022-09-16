import { Router } from "express";
import { createAdsController } from "../useCases/Ad/create";
import { listAllAdsController } from "../useCases/Ad/listAll";
import { listDiscordAdsController } from "../useCases/Ad/listDiscord";

const adRouter = Router()

adRouter.post('/ads/:gameId/ads', (request, response) => {
  return createAdsController.handle(request, response)
})

adRouter.get('/ads/:id', (request, response) => {
  return listAllAdsController.handle(request, response)
})

adRouter.get('/ads/:id/discord', (request, response) => {
  return listDiscordAdsController.handle(request, response)
})

export { adRouter };
