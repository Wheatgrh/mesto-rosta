import { BaseEntity, Entity, ManyToOne, PrimaryKey } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { UploadFile } from '../../uploads/entities/file.entity';

@Entity({ tableName: 'certificates' })
export class Certificate extends BaseEntity<Certificate, 'uuid'> {
  @PrimaryKey()
  uuid: string = v4();

  @ManyToOne(() => UploadFile)
  file: UploadFile;
}
