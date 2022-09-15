import { SqLiteAdRepository } from "../../../repositories/Ad/AdImplementRepository";
import { ListAllAdsController } from "./listAllController";
import { ListAllAdsUseCase } from "./listAllUseCase";

const sqliteAdRepository = new SqLiteAdRepository()

const listAllAdsUseCase = new ListAllAdsUseCase(
  sqliteAdRepository
)

const listAllAdsController = new ListAllAdsController(
  listAllAdsUseCase
)

export { listAllAdsUseCase, listAllAdsController };
