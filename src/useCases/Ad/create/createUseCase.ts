import { Ad } from "../../../models/ad";
import { AdRepository } from "../../../repositories/Ad/AdRepository";
import { CreateAdDTO } from "./createDTO";

export class CreateAdUseCase {
  constructor(
    private adRepository: AdRepository
  ) { }

  async execute(data: CreateAdDTO) {
    const adAlreadyExist = await this.adRepository.findByName(data.name)

    if (adAlreadyExist) {
      throw new Error("ads already exists.");
    }
    const ads = new Ad(data)

    await this.adRepository.create(data.gameId, ads)
  }
}