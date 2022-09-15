import { AdRepository } from "../../../repositories/Ad/AdRepository";
import { ListAllAdDTO } from "./listAllDTO";

export class ListAllAdsUseCase {
  constructor(
    private AdRepository: AdRepository
  ) { }

  async execute(data: ListAllAdDTO) {
    const ads = await this.AdRepository.findByGameId(data.id)
    return ads
  }
}