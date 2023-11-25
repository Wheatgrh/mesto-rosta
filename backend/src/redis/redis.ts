import { Injectable } from '@nestjs/common';
import * as Redis from 'redis';
import config from '../config';

@Injectable()
export class RedisConnectionProvider {
  private readonly redisClient: Redis.RedisClientType;

  constructor() {
    this.redisClient = Redis.createClient({
      password: config.redisPassword,
      socket: {
        host: config.redisHost,
        port: +config.redisPort,
      },
    });
    this.redisClient.on('error', (err) =>
      console.log('Redis Client Error', err),
    );
    this.redisClient.connect();
    console.log('Соединение с Redis установлено');
  }

  getRedisClient(): Redis.RedisClientType {
    return this.redisClient;
  }
}
