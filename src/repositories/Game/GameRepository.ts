import { Game } from "../../models/game"

export interface GameRepository {
  findAll(): Promise<Game[]>
}