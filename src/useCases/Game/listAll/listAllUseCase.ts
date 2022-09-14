import { GameRepository } from "../../../repositories/Game/GameRepository"

export class ListAllGameUseCase {
  constructor(
    private gamesRepository: GameRepository
  ) { }

  async execute() {
    const games = await this.gamesRepository.findAll()
    return games
  }
}