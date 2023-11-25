import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

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

  @IsOptional()
  checkList?: [
    {
      quest: string;
      stat: boolean;
    },
  ];
}

export class UpdateUserDto extends PartialType(UserDto) {
  @IsString()
  uuid: string;
}
