import { SqLiteGameRepository } from "../../../repositories/Game/GameImplementRepository";
import { ListAllGameController } from "./listAllController";
import { ListAllGameUseCase } from "./listAllUseCase";

const sqliteGameRepository = new SqLiteGameRepository()

const listAllGameUseCase = new ListAllGameUseCase(
  sqliteGameRepository
)

const listAllGameController = new ListAllGameController(
  listAllGameUseCase
)

export { listAllGameUseCase, listAllGameController };
