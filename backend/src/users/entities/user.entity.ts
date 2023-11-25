import {
  BaseEntity,
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Interest } from '../../interests/entities/interest.entity';
import { UserInterest } from './userIterest.entity';
import { UploadImage } from '../../uploads/entities/image.entity';
import { Certificate } from '../../certificates/entities/certificate.entity';

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

  @ManyToMany({
    nullable: true,
    entity: () => Interest,
    pivotEntity: () => UserInterest,
  })
  interests = new Collection<Interest>(this);

  @Property({ type: 'int', default: 0 })
  score: number;

  @ManyToOne(() => UploadImage, { nullable: true })
  avatar: UploadImage;

  @OneToMany(() => Certificate, (cert) => cert.user, { nullable: true })
  certificates = new Collection<Certificate>(this);
}
