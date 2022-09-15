import { Ad } from "../../models/ad";
import { prisma } from "../../prisma";
import { hoursToMinutes } from "../../utils/hours-to-minutes";
import { AdRepository } from "./AdRepository";

export class SqLiteAdRepository implements AdRepository {
  async create(gameId: string, ad: Ad): Promise<void> {
    const convertedhoursStart = hoursToMinutes(ad.hoursStart)
    const convertedhourEnd = hoursToMinutes(ad.hourEnd)
    await prisma.ad.create({
      data: {
        gameId: gameId,
        name: ad.name,
        yearsPlaying: ad.yearsPlaying,
        discord: ad.discord,
        weekDays: ad.weekDays,
        hoursStart: convertedhoursStart,
        hourEnd: convertedhourEnd,
        useVoiceChannel: ad.useVoiceChannel,
      }
    })
    return
  }

  async findByName(name: string): Promise<Ad | null> {
    const ad = await prisma.ad.findFirst({
      where: {
        name: name
      }
    })
    return ad
  }

  async findByGameId(gameId: string): Promise<Ad[]> {
    const ads = await prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hoursStart: true,
        hourEnd: true,
        discord: true,
      },
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