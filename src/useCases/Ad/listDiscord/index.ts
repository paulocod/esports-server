import { SqLiteAdRepository } from "../../../repositories/Ad/AdImplementRepository";
import { ListDiscordAdsController } from "./listDiscordController";
import { ListDiscordAdsUseCase } from "./listDiscordUseCase";

const sqliteAdRepository = new SqLiteAdRepository()

const listDiscordAdsUseCase = new ListDiscordAdsUseCase(
  sqliteAdRepository
)

const listDiscordAdsController = new ListDiscordAdsController(
  listDiscordAdsUseCase
)

export { listDiscordAdsUseCase, listDiscordAdsController };
