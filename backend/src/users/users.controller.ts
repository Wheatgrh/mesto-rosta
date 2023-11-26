import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto, UserDto } from './dto/user.dto';
import { UpdateInterestsDto } from './dto/update-interests.dto';

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

  @Patch()
  async updateUser(@Body() dto: UpdateUserDto) {
    return await this.userService.updateUser(dto);
  }

  @Patch('interests')
  async updateInterests(@Body() dto: UpdateInterestsDto) {
    return await this.userService.updateInterests(dto);
  }
}
