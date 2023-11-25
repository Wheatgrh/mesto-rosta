import {
  BaseEntity,
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Interest } from '../../interests/entities/interest.entity';
import { Partner } from '../../partners/entities/partner.entity';

@Entity({ tableName: 'courses' })
export class Course extends BaseEntity<Course, 'uuid'> {
  @PrimaryKey()
  uuid: string = v4();

  @Property()
  name: string;

  @ManyToMany({ entity: () => Interest })
  interests = new Collection<Interest>(this);

  @ManyToOne({ entity: () => Partner })
  partner: Partner;

  @Property()
  level: string;
}
