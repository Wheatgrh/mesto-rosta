import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InterestsService {
  constructor(private readonly em: EntityManager) {}
}
