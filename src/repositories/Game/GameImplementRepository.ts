import { Game } from "../../models/game";
import { prisma } from "../../prisma";
import { GameRepository } from "./GameRepository";

export class SqLiteGameRepository implements GameRepository {

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
}