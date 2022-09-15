import express from "express";
import { createAdsController } from "./useCases/Ad/create";
import { listAllAdsController } from "./useCases/Ad/listAll";
import { listDiscordAdsController } from "./useCases/Ad/listDiscord";
import { listAllGameController } from "./useCases/Game/listAll";

const app = express()

app.use(express.json())

app.get('/games', (request, response) => {
  return listAllGameController.handle(request, response)
})

app.post('/ads/:gameId/ads', (request, response) => {
  return createAdsController.handle(request, response)
})

app.get('/ads/:id', (request, response) => {
  return listAllAdsController.handle(request, response)
})

app.get('/ads/:id/discord', (request, response) => {
  return listDiscordAdsController.handle(request, response)
})

export default app
