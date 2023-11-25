import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { UploadFile } from '../../uploads/entities/file.entity';
import { User } from '../../users/entities/user.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity({ tableName: 'certificates' })
export class Certificate extends BaseEntity<Certificate, 'uuid'> {
  @PrimaryKey()
  uuid: string = v4();

  @ManyToOne(() => UploadFile)
  file: UploadFile;

  @Property({ default: false })
  validated: boolean;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Course, { nullable: true })
  course: Course;
}
