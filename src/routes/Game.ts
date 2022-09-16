import { Router } from "express";
import { listAllGameController } from "../useCases/Game/listAll";

const gameRouter = Router()

gameRouter.get('/games', (request, response) => {
  return listAllGameController.handle(request, response)
})

export { gameRouter };
