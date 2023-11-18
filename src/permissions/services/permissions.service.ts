import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { UpdatePermissionDto } from '../dto/update-permission.dto';
import { PermissionQueryDto } from '../dto/permission-query.dto';
import { PermissionEntity } from '../entities/permission.entity';
import { PermissionRepository } from '../repositories/permission.repository';

Injectable();
export class PermissionService {
  constructor(private permissionRepository: PermissionRepository) {}
  async create(CreatePermissionDto: CreatePermissionDto) {
    return this.permissionRepository.createAndSave(CreatePermissionDto);
  }

  findAll(dto: PermissionQueryDto) {
    return this.permissionRepository.findAll(dto);
  }

  findOne(id: number) {
    return this.permissionRepository.findOneByCredential(id);
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    const { name, slug } = updatePermissionDto;
    const role = new PermissionEntity({
      id,
      name,
      slug,
    });
    return this.permissionRepository.save(role);
  }
}
