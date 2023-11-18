import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { PermissionService } from '../services/permissions.service';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { UpdatePermissionDto } from '../dto/update-permission.dto';
import { ApiTags } from '@nestjs/swagger';
import { PermissionQueryDto } from '../dto/permission-query.dto';
import { Permissions } from 'src/common/decorators/permissions.decorator';

@Controller('/api/v1/manager/permissions')
@ApiTags('Permissions Controller')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionService) {}

  @Post()
  @Permissions()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  @Permissions()
  findAll(@Query() query: PermissionQueryDto) {
    return this.permissionsService.findAll(query);
  }

  @Get(':id')
  @Permissions()
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }

  @Patch(':id')
  @Permissions()
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }
}
