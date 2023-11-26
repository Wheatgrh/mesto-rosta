import { IsString } from 'class-validator';

export class CertificateDto {
  @IsString()
  file: string;

  @IsString()
  userUuid: string;
}
