import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { GptRequestDto } from './dto/gpt-request.dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly srv: GptService) {}

  @Post()
  public async getRes(@Body() dto: GptRequestDto) {
    return await this.srv.getRes(dto.message);
  }
}
