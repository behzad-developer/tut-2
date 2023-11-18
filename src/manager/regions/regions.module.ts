import { Module } from '@nestjs/common';
import { RegionService } from './services/regions.service';
import { RegionsController } from './controllers/regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionEntity } from './entities/region.entity';
import { RegionRepository } from './repositories/region.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RegionEntity])],
  controllers: [RegionsController],
  providers: [RegionService, RegionRepository],
})
export class RegionsModule {}
