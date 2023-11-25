import {
  BaseEntity,
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Course } from '../../courses/entities/course.entity';
import { UploadImage } from '../../uploads/entities/image.entity';

@Entity({ tableName: 'partners' })
export class Partner extends BaseEntity<Partner, 'uuid'> {
  @PrimaryKey()
  uuid: string = v4();

  @Property()
  name: string;

  @Property({ type: 'text' })
  description: string;

  @OneToMany(() => Course, (course) => course.partner)
  courses = new Collection<Course>(this);

  @ManyToOne(() => UploadImage)
  logo: UploadImage;
}
