import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import * as jwt from 'jsonwebtoken';
import config from '../config';
import { EntityManager } from '@mikro-orm/core';
import { RedisConnectionProvider } from '../redis/redis';

interface IStoreToken {
  userUuid: string;
  token: string;
}
@Injectable()
export class JwtService {
  constructor(
    private readonly em: EntityManager,
    private readonly rcp: RedisConnectionProvider,
  ) {}

  createTokensAsync(userId: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const refresh: string = v4();
        const res = {
          token: jwt.sign({ id: userId }, config.jwtSecret, {
            expiresIn: '15m',
          }),
          refresh,
        };
        await this.storeToken({ token: res.refresh, userUuid: userId });
        resolve(res);
      } catch (err) {
        console.log(err);
        reject();
      }
    });
  }

  private async storeToken(data: IStoreToken) {
    const key = `${data.userUuid}:${data.token}`;
    const expiration = 30 * 24 * 60 * 60;
    const redisClient = this.rcp.getRedisClient();
    await redisClient.SET(key, 'true', { EX: expiration });
  }

  async getToken(token: string): Promise<Array<string> | null> {
    const redisClient = this.rcp.getRedisClient();
    const res = await redisClient.KEYS(`*:${token}`);
    if (res.length != 1) {
      return null;
    }
    return res;
  }

  async removeToken(key: string): Promise<boolean> {
    const redisClient = this.rcp.getRedisClient();
    const res = await redisClient.DEL([key]);
    if (!res) {
      return false;
    }
    return true;
  }
}
