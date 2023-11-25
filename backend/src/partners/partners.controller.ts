import { Body, Controller, Get, Post } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { PartnerDto } from './dto/partner.dto';

@Controller('partners')
export class PartnersController {
  constructor(private citiesService: PartnersService) {}

  @Post()
  private async create(@Body() dto: PartnerDto) {
    return await this.citiesService.create(dto);
  }

  @Get()
  private async getAll() {
    return await this.citiesService.getAll();
  }
}
