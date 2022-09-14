import { Ad } from "../../models/ad";
import { prisma } from "../../prisma";
import { AdRepository } from "./AdRepository";

export class SqLiteAdRepository implements AdRepository {
  async create(gameId: string, ad: Ad): Promise<void> {
    const advertising = await prisma.ad.create({
      data: {
        gameId,
        name: ad.name,
        yearsPlaying: ad.yearsPlaying,
        discord: ad.discord,
        weekDays: ad.weekDays,
        hoursStart: ad.hoursStart,
        hourEnd: ad.hourEnd,
        useVoiceChannel: ad.useVoiceChannel,
      }
    })
    return
  }

  async findByGameId(gameId: string): Promise<Ad[]> {
    const ads = await prisma.ad.findMany({
      where: {
        gameId
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return ads
  }

  async findDiscordByAd(id: string): Promise<Partial<Ad>> {
    const userDiscord = await prisma.ad.findFirstOrThrow({
      select: {
        discord: true
      },
      where: {
        id
      }
    })
    return userDiscord
  }

}