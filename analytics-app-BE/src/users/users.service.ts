import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { validateOrReject } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = this.userRepository.create(createUserDto);
      await validateOrReject(newUser);
      newUser.password = await bcrypt.hash(newUser.password, 10);

      const user = await this.userRepository.save(newUser);
      return user;
    } catch (err) {
      return err.message;
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (err) {
      err.message;
    }
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOneBy({ email: email });
    console.log(await bcrypt.compare(password, user.password));
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
