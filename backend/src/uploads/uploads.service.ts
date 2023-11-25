import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { ThumbnailImage, UploadImage } from './entities/image.entity';
import * as sharp from 'sharp';
import { S3 } from 'aws-sdk';
import { v4 } from 'uuid';
import * as path from 'path';
import { UploadFile } from './entities/file.entity';

@Injectable()
export class UploadsService {
  constructor(private readonly em: EntityManager) {}

  private isImage(mimetype: string): boolean {
    return [
      'image/apng',
      'image/bmp',
      'image/gif',
      'image/x-icon',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/tiff',
      'image/webp',
    ].includes(mimetype);
  }

  async uploadFile(file: Express.Multer.File) {
    if (this.isImage(file.mimetype)) {
      const convertedOrigin = await this.convertImg(file);
      const originBuffer = await convertedOrigin.toBuffer();
      const thumbnail = await this.createThumbnail(convertedOrigin);
      const res = await this.uploadPublicFile(originBuffer, '.webp', 'images');
      const image = this.em.create(UploadImage, {
        key: res.Key,
        name: file.originalname,
        thumbnail: thumbnail || new ThumbnailImage(res.Location, 'image/webp'),
        type: 'image/webp',
        url: res.Location,
      });
      await this.em.persistAndFlush(image);
      return image;
    }
    console.log(file);

    const uploadedRes = await this.uploadPublicFile(
      file.buffer,
      path.extname(file.originalname),
      'files',
    );
    const uploadedFile = this.em.create(UploadFile, {
      key: uploadedRes.Key,
      name: file.originalname,
      type: file.mimetype,
      url: uploadedRes.Location,
    });
    await this.em.persistAndFlush(uploadedFile);
    return uploadedFile;
  }

  private async createThumbnail(
    img: sharp.Sharp,
  ): Promise<ThumbnailImage | null> {
    const metadata = await img.metadata();
    const thumbnailSize = 300;
    if (metadata && metadata.width <= thumbnailSize) {
      return null;
    }
    let width, height: number;
    if (metadata.width >= metadata.height) {
      width = thumbnailSize;
      height = Math.round(metadata.height * (thumbnailSize / metadata.width));
    } else {
      height = thumbnailSize;
      width = Math.round(metadata.width * (thumbnailSize / metadata.height));
    }
    const thumbnail = await img
      .resize({ width, height, fit: 'contain' })
      .toBuffer();
    const res = await this.uploadPublicFile(thumbnail, '_thumb.webp', 'images');
    return new ThumbnailImage(res.Location, 'image/webp');
  }

  private async convertImg(rawImg: Express.Multer.File): Promise<sharp.Sharp> {
    const img = await sharp(rawImg.buffer);
    const metadata = await img.metadata();
    if (metadata.format === 'webp') {
      return await img;
    }
    return await img.webp();
  }

  private async uploadPublicFile(
    buffer: Buffer,
    extension: string,
    folder: string,
  ) {
    const s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      endpoint: process.env.AWS_ENDPOINT,
    });
    const key = folder + v4() + extension;
    return await s3
      .upload({
        Bucket: process.env.AWS_BUCKET,
        Body: buffer,
        Key: key,
      })
      .promise();
  }

  async findFile(uuid: string): Promise<UploadFile> {
    return await this.em.findOne(UploadFile, uuid);
  }
  async findImage(uuid: string): Promise<UploadImage> {
    return await this.em.findOne(UploadImage, uuid);
  }
}
