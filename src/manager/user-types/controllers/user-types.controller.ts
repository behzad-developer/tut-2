import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { UserTypeService } from '../services/user-types.service';
import { CreateUserTypeDto } from '../dto/create-user-type.dto';
import { UpdateUserTypeDto } from '../dto/update-user-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { UserTypeQueryDto } from '../dto/userType-query.dto';

@Controller('api/v1/manager/user-types')
@ApiTags('Manager User Types Controller')
export class UserTypesController {
  constructor(private readonly userTypesService: UserTypeService) {}

  @Post()
  @Permissions()
  create(@Body() createUserTypeDto: CreateUserTypeDto) {
    return this.userTypesService.create(createUserTypeDto);
  }

  @Get()
  @Permissions()
  findAll(@Query() query: UserTypeQueryDto) {
    return this.userTypesService.findAll(query);
  }

  @Patch(':id')
  @Permissions()
  update(
    @Param('id') id: string,
    @Body() updateUserTypeDto: UpdateUserTypeDto,
  ) {
    return this.userTypesService.update(+id, updateUserTypeDto);
  }
}
