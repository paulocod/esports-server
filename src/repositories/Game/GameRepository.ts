import { Game } from "../../models/game"

export interface GameRepository {
  create(game: Game): Promise<void>
  findAll(): Promise<Game[]>
  findById(id: string): Promise<Game | null>
}