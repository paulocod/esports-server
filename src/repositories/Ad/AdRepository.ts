import { Ad } from "../../models/ad"

export interface AdRepository {
  create(gameId: string, ad: Ad): Promise<void>
  findByName(name: string): Promise<Ad | null>
  findByGameId(gameId: string): Promise<Ad[]>
  findDiscordByAd(id: string): Promise<Partial<Ad | null>>
}