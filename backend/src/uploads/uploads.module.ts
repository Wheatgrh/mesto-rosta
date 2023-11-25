import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UploadFile } from './entities/file.entity';
import { UploadImage } from './entities/image.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UploadFile, UploadImage])],
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadsModule {}
