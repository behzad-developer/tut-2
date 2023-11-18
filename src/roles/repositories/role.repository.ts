import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { RoleEntity } from '../entities/role.entity';
import { RoleInterface } from '../interface/role.interface';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { RoleQueryDto } from '../dto/role-query.dto';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class RoleRepository extends Repository<RoleEntity> {
  constructor(private dataSource: DataSource) {
    super(RoleEntity, dataSource.createEntityManager());
  }

  createAndSave(payload?: Partial<RoleInterface>) {
    const entity = new RoleEntity(payload);
    if (payload.userIds) {
      entity.users = payload.userIds.map(
        (userId) =>
          new UserEntity({
            id: userId,
          }),
      );
    }
    if (payload.permissionIds) {
      entity.permissions = payload.permissionIds.map(
        (permissionId) =>
          new PermissionEntity({
            id: permissionId,
          }),
      );
    }
    return this.save(entity);
  }

  findAll(dto: RoleQueryDto) {
    const { limit, search, skip, orderBy, orderDirection } = dto;
    const query = this.createQueryBuilder('roles');
    if (search) {
      query.where('roles.name ILIKE (:search) OR  roles.slug ILIKE (:search)', {
        search: `%${search}%`,
      });
    }
    return query
      .orderBy(orderBy)
      .orderBy(orderDirection)
      .take(limit)
      .skip((skip - 1) * limit)
      .getMany();
  }
  findOneByCredential(id: number) {
    return this.createQueryBuilder('r').where('r.id =:id', { id }).getOne();
  }
  findIds(ids: number[]) {
    return this.createQueryBuilder('roles')
      .where('roles.id IN (:...ids)', { ids })
      .getMany();
  }
}
