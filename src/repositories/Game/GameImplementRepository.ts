import { Game } from "../../models/game";
import { prisma } from "../../prisma";
import { GameRepository } from "./GameRepository";

export class SqLiteGameRepository implements GameRepository {
  async create(game: Game): Promise<void> {
  }
  async findAll(): Promise<Game[]> {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            Ad: true,
          }
        }
      }
    })
    return games
  }

  async findById(id: string): Promise<Game | null> {
    const game = await prisma.game.findUnique({
      where: {
        id,
      }
    })
    return game
  }

}