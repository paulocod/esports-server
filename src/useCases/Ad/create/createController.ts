import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, matchPassword } = request.body

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
        matchPassword
      })
      return response.status(201).send()

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}