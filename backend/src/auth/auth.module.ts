import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';
import { RedisModule } from '../redis/redis.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  imports: [RedisModule],
})
export class AuthModule {}
