import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUsersDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { UserQueryDto } from '../dto/managerUser-query.dto';

@Controller('api/v1/manager/users')
@ApiTags('Manager User Controller')
export class ManagerUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Permissions()
  create(@Body() createUserDto: CreateUsersDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Permissions()
  findAll(@Query() query: UserQueryDto) {
    return this.usersService.findAll(query);
  }

  @Get(':id')
  @Permissions()
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @Permissions()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
}
