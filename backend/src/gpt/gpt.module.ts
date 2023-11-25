import { Module } from '@nestjs/common';
import { GptController } from './gpt.controller';
import { GptService } from './gpt.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [GptController],
  providers: [GptService],
  imports: [HttpModule],
})
export class GptModule {}
