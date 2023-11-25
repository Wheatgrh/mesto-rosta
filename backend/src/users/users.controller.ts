import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() dto: UserDto) {
    return await this.userService.createUser(dto);
  }

  @Get(':phone')
  async getUser(@Param('phone') phone: string) {
    return await this.userService.getUser(phone);
  }
}
