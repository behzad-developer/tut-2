import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleEntity } from '../entities/role.entity';
import { RoleRepository } from '../repositories/role.repository';
import { RoleQueryDto } from '../dto/role-query.dto';

@Injectable()
export class RolesService {
  constructor(private roleRepository: RoleRepository) {}
  async create(CreateRoleDto: CreateRoleDto) {
    return this.roleRepository.createAndSave(CreateRoleDto);
  }

  findAll(dto: RoleQueryDto) {
    return this.roleRepository.findAll(dto);
  }

  findOne(id: number) {
    return this.roleRepository.findOneByCredential(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    const { name, slug } = updateRoleDto;
    const role = new RoleEntity({
      id,
      name,
      slug,
    });
    return this.roleRepository.save(role);
  }
}
