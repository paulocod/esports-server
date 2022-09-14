import { PostgresUsersRepository } from "../../../repositories/User/implementations/PostgresUsersRepository";
import { ListAllUserController } from "./listAllController";
import { ListAllUserUseCase } from "./listAllUseCase";

const postgresUsersRepository = new PostgresUsersRepository()

const listAllUserUseCase = new ListAllUserUseCase(
  postgresUsersRepository
)

const listAllUserController = new ListAllUserController(
  listAllUserUseCase
)

export { listAllUserUseCase, listAllUserController };
