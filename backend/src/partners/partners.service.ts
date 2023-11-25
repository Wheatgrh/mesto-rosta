import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Partner } from './entities/partner.entity';
import { PartnerDto } from './dto/partner.dto';

@Injectable()
export class PartnersService {
  constructor(private readonly em: EntityManager) {}

  async create(dto: PartnerDto) {
    const partner = this.em.create(Partner, dto);
    await this.em.persistAndFlush(partner);
    return partner;
  }

  async getAll() {
    return await this.em.find(Partner, {});
  }
}
