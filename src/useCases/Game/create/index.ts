import { SqLiteGameRepository } from "../../../repositories/Game/GameImplementRepository";
import { CreateGameController } from "./createController";
import { CreateGameUseCase } from "./createUseCase";

const sqliteGameRepository = new SqLiteGameRepository()

const createGameUseCase = new CreateGameUseCase(
  sqliteGameRepository
)

const createGameController = new CreateGameController(
  createGameUseCase
)

export { createGameUseCase, createGameController };
