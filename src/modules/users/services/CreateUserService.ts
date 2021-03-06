import { hash } from 'bcryptjs';
import {inject, injectable} from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository
    ){}
  public async execute({ name, email, password }: IRequest): Promise<User> {

    const checkUserExists = await this.userRepository.findByEmail( email);

    if (checkUserExists) {
      throw new AppError('Email address already used.', 400);
    }
    const hashedPassword = await hash(password, 8);
    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return user;
  }
}
export default CreateUserService;
