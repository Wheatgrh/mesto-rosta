import { EntityManager, NotFoundError } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) {}

  async createUser(dto: UserDto) {
    const user = this.em.create(User, dto);
    user.password = await bcrypt.hash(user.password, 10);
    await this.em.persistAndFlush(user);
    return user;
  }

  async getUser(phone: string) {
    try {
      return await this.em.findOneOrFail(User, { phone });
    } catch (err) {
      if (err instanceof NotFoundError) {
        throw new NotFoundException('Такого пользователя не существует');
      }
    }
  }
}
