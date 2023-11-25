import { Entity, Property } from '@mikro-orm/core';
import { UploadFile } from './file.entity';

export class ThumbnailImage {
  url: string;
  type: string;

  constructor(url: string, type: string) {
    this.url = url;
    this.type = type;
  }
}

@Entity({ tableName: 'images' })
export class UploadImage extends UploadFile {
  @Property({ type: 'jsonb' })
  thumbnail: ThumbnailImage;
}
