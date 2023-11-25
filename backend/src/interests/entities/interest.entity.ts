import {
  BaseEntity,
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { User } from '../../users/entities/user.entity';

@Entity({ tableName: 'interests' })
export class Interest extends BaseEntity<Interest, 'uuid'> {
  @PrimaryKey()
  uuid: string = v4();

  @Property()
  name: string;

  @ManyToMany({ entity: () => User, mappedBy: (o) => o.interests })
  users = new Collection<User>(this);
}
