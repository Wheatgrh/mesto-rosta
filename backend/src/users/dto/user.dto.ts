import { IsBoolean, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  phone: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  patronymic: string;

  @IsString()
  role: string;
}
