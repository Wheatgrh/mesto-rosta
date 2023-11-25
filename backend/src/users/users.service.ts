import { EntityManager, NotFoundError, ValidationError } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto, UpdateUserDto } from './dto/user.dto';
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
      return await this.em.findOneOrFail(
        User,
        { phone },
        { populate: ['avatar', 'interests'] },
      );
    } catch (err) {
      if (err instanceof NotFoundError) {
        throw new NotFoundException('Такого пользователя не существует');
      }
    }
  }

  async updateUser(dto: UpdateUserDto) {
    try {
      const user = await this.em.findOneOrFail(
        User,
        {
          uuid: dto.uuid,
        },
        { populate: ['avatar', 'interests'] },
      );
      this.em.assign(user, dto);
      await this.em.persistAndFlush(user);
      return user;
    } catch (err) {
      console.error(err);
      throw new ValidationError('Ошибка');
    }
  }
}
