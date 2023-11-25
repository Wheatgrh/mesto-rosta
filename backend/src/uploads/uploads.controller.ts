import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  private async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (file.originalname) {
      if (!/[^\u0000-\u00ff]/.test(file.originalname)) {
        file.originalname = Buffer.from(file.originalname, 'latin1').toString(
          'utf8',
        );
      }
    }
    return await this.uploadsService.uploadFile(file);
  }

  @Get('images/:uuid')
  private async getImage(@Param() uuid: string) {
    return await this.uploadsService.findImage(uuid);
  }
  @Get('files/:uuid')
  private async getFile(@Param() uuid: string) {
    return await this.uploadsService.findFile(uuid);
  }
}
