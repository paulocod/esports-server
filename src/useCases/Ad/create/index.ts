import { PostgresUsersRepository } from "../../../repositories/User/implementations/PostgresUsersRepository";
import { CreateUserController } from "./createController";
import { CreateUserUseCase } from "./createUseCase";

const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController };
