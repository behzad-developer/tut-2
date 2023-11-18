import { Module } from '@nestjs/common';
import { PermissionService } from './services/permissions.service';
import { PermissionsController } from './controllers/permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionEntity } from './entities/permission.entity';
import { PermissionRepository } from './repositories/permission.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionEntity])],
  controllers: [PermissionsController],
  providers: [PermissionService, PermissionRepository],
})
export class PermissionsModule {}
