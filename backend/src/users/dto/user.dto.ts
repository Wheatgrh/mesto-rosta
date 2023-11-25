import { IsBoolean, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  phone: string;

  @IsString()
  password: string;

  @IsBoolean()
  isAdmin = false;
}
