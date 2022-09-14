import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/User/IUsersRepository";
import { ICreateUserRequestDTO } from "./createDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByOne(data.email)

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    if (data.password !== data.matchPassword) {
      throw new Error("Passwords don't match")
    }

    const user = new User(data)

    await this.usersRepository.create(user)
  }
}