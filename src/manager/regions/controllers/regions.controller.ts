import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { RegionService } from '../services/regions.service';
import { CreateRegionDto } from '../dto/create-region.dto';
import { UpdateRegionDto } from '../dto/update-region.dto';
import { ApiTags } from '@nestjs/swagger';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { RegionQueryDto } from '../dto/region-query.dto';

@Controller('api/v1/manager/regions')
@ApiTags('Manager Regions Controller')
export class RegionsController {
  constructor(private readonly regionsService: RegionService) {}

  @Post()
  @Permissions()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.create(createRegionDto);
  }

  @Get()
  @Permissions()
  findAll(@Query() query: RegionQueryDto) {
    return this.regionsService.findAll(query);
  }

  @Get(':id')
  @Permissions()
  findOne(@Param('id') id: string) {
    return this.regionsService.findOne(+id);
  }

  @Patch(':id')
  @Permissions()
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionsService.update(+id, updateRegionDto);
  }
}
