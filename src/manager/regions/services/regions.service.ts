import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from '../dto/create-region.dto';
import { UpdateRegionDto } from '../dto/update-region.dto';
import { RegionQueryDto } from '../dto/region-query.dto';
import { RegionEntity } from '../entities/region.entity';
import { RegionRepository } from '../repositories/region.repository';

@Injectable()
export class RegionService {
  constructor(private regionRepository: RegionRepository) {}
  async create(CreateRegionDto: CreateRegionDto) {
    return this.regionRepository.createAndSave(CreateRegionDto);
  }

  findAll(dto: RegionQueryDto) {
    return this.regionRepository.findAll(dto);
  }

  findOne(id: number) {
    return this.regionRepository.findOneByCredential(id);
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    const { name } = updateRegionDto;
    const role = new RegionEntity({
      id,
      name,
    });
    return this.regionRepository.save(role);
  }
}
