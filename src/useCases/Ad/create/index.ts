import { SqLiteAdRepository } from "../../../repositories/Ad/AdImplementRepository";
import { CreateAdsController } from "./createController";
import { CreateAdUseCase } from "./createUseCase";

const sqliteAdRepository = new SqLiteAdRepository()

const createAdsUseCase = new CreateAdUseCase(
  sqliteAdRepository
)

const createAdsController = new CreateAdsController(
  createAdsUseCase
)

export { createAdsUseCase, createAdsController };
