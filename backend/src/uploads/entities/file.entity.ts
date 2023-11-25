import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity({ tableName: 'files' })
export class UploadFile extends BaseEntity<UploadFile, 'uuid'> {
  @PrimaryKey()
  uuid: string = v4();

  @Property()
  key!: string;

  @Property()
  url!: string;

  @Property()
  type!: string;

  @Property()
  name!: string;
}
