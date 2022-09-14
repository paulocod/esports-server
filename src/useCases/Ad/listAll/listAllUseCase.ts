import { IUsersRepository } from "../../../repositories/User/IUsersRepository";

export class ListAllUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute() {
    const users = await this.usersRepository.findAll()
    return users
  }
}