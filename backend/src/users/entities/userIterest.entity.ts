import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { User } from './user.entity';
import { Interest } from '../../interests/entities/interest.entity';

@Entity({ tableName: 'users_interests' })
export class UserInterest {
  @ManyToOne(() => User, { primary: true })
  user: User;

  @ManyToOne(() => Interest, { primary: true })
  substandardTwo: Interest;

  @Property({ type: 'int' })
  grade: number;
}
