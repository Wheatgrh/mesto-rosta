import { IsArray, IsString } from 'class-validator';

export class UpdateInterestsDto {
  @IsArray()
  interests: string[];

  @IsString()
  userUuid: string;
}
