import { Game } from "../../../models/game";
import { GameRepository } from "../../../repositories/Game/GameRepository";
import { CreateGameDTO } from "./createDTO";

export class CreateGameUseCase {
  constructor(
    private gameRepository: GameRepository
  ) { }

  async execute(data: CreateGameDTO) {
    const game = new Game(data)

    await this.gameRepository.create(game)
  }
}