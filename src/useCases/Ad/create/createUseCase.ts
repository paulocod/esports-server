import { Ad } from "../../../models/ad";
import { AdRepository } from "../../../repositories/Ad/AdRepository";
import { CreateAdDTO } from "./createDTO";

export class CreateAdUseCase {
  constructor(
    private adRepository: AdRepository
  ) { }

  async execute(data: CreateAdDTO) {
    const ads = new Ad(data)

    await this.adRepository.create(data.gameId, ads)
  }
}