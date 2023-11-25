import { IsString } from 'class-validator';

export class PartnerDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  logo: string;
}
