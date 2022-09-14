import express from "express";
import { listAllGameController } from "./useCases/Game/listAll";

const app = express()

app.use(express.json())

app.get('/games', (request, response) => {
  return listAllGameController.handle(request, response)
})

export default app
