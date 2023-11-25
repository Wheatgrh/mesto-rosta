import { Module } from '@nestjs/common';
import { RedisConnectionProvider } from './redis';

@Module({
  providers: [RedisConnectionProvider],
  exports: [RedisConnectionProvider],
})
export class RedisModule {}
