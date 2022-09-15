import { AdRepository } from "../../../repositories/Ad/AdRepository";
import { ListDiscordAdDTO } from "./listDiscordDTO";

export class ListDiscordAdsUseCase {
  constructor(
    private AdRepository: AdRepository
  ) { }

  async execute(data: ListDiscordAdDTO) {
    const ads = await this.AdRepository.findDiscordByAd(data.id)
    return ads
  }
}