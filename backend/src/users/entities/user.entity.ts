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
import { UserInterest } from './userIterest.entity';
import { UploadImage } from '../../uploads/entities/image.entity';

@Entity({ tableName: 'users' })
export class User extends BaseEntity<User, 'uuid'> {
  @PrimaryKey()
  uuid: string = v4();

  @Property()
  name: string;

  @Property()
  surname: string; // фамилия

  @Property()
  patronymic: string;

  @Property({ unique: true })
  phone: string;

  @Property({ hidden: true })
  password: string;

  @Property()
  role: string;

  @ManyToMany({ entity: () => Interest, pivotEntity: () => UserInterest })
  interests = new Collection<Interest>(this);

  @Property({ type: 'int', default: 0 })
  score: number;

  @ManyToOne(() => UploadImage)
  avatar: UploadImage;
}
