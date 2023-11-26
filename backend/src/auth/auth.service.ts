import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { EntityManager } from '@mikro-orm/core';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from './jwt.service';
import { RefreshDto } from './dto/refresh.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly em: EntityManager,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.em.findOne(
      User,
      { phone: dto.phone },
      { populate: ['avatar', 'interests'] },
    );
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new ForbiddenException('Неверный логин или пароль');
    }
    const tokens = await this.jwtService.createTokensAsync(user.uuid);
    delete user.password;
    return {
      tokens,
      user,
    };
  }

  async refresh(dto: RefreshDto) {
    const res = await this.jwtService.getToken(dto.refreshToken);
    if (!res) {
      throw new NotFoundException('Токен не валиден');
    }
    const [userUuid] = res[0].split(':');
    const tokens = await this.jwtService.createTokensAsync(userUuid);
    await this.jwtService.removeToken(res[0]);
    const user = await this.em.findOne(
      User,
      { uuid: userUuid },
      { populate: ['avatar', 'interests'] },
    );
    return {
      tokens,
      user,
    };
  }
}
