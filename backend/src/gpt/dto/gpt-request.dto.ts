import { IsString } from 'class-validator';

export class GptRequestDto {
  @IsString()
  message: string;
}
