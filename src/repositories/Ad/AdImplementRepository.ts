import { Ad } from "../../models/ad";
import { prisma } from "../../prisma";
import { hoursToMinutes } from "../../utils/hours-to-minutes";
import { AdRepository } from "./AdRepository";

export class SqLiteAdRepository implements AdRepository {
  async create(gameId: string, ad: Ad): Promise<void> {
    const convertedhoursStartToMinutes = hoursToMinutes(ad.hoursStart)
    const convertedhourEndToMinutes = hoursToMinutes(ad.hourEnd)
    const ArrayWeekDaysToString = Array(ad.weekDays).join(',')
    await prisma.ad.create({
      data: {
        gameId: gameId,
        name: ad.name,
        yearsPlaying: ad.yearsPlaying,
        discord: ad.discord,
        weekDays: ArrayWeekDaysToString,
        hoursStart: convertedhoursStartToMinutes,
        hourEnd: convertedhourEndToMinutes,
        useVoiceChannel: ad.useVoiceChannel,
      }
    })
    return
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