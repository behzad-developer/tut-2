import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { RoleEntity } from 'src/roles/entities/role.entity';
import { PermissionInterface } from '../interface/permission.interface';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { PermissionQueryDto } from '../dto/permission-query.dto';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class PermissionRepository extends Repository<PermissionEntity> {
  constructor(private dataSource: DataSource) {
    super(PermissionEntity, dataSource.createEntityManager());
  }

  createAndSave(payload?: Partial<PermissionInterface>) {
    const entity = new PermissionEntity(payload);
    if (payload.userIds) {
      entity.users = payload.userIds.map(
        (userIds) =>
          new UserEntity({
            id: userIds,
          }),
      );
    }
    if (payload.roleIds) {
      entity.roles = payload.roleIds.map(
        (roleIds) =>
          new RoleEntity({
            id: roleIds,
          }),
      );
    }
    return this.save(entity);
  }

  findAll(dto: PermissionQueryDto) {
    const { limit, search, skip, orderBy, orderDirection } = dto;
    const query = this.createQueryBuilder('roles');
    if (search) {
      query.where(
        'permissions.name ILIKE (:search) OR  permissions.slug ILIKE (:search)',
        {
          search: `%${search}%`,
        },
      );
    }
    return query
      .orderBy(orderBy)
      .orderBy(orderDirection)
      .take(limit)
      .skip((skip - 1) * limit)
      .getMany();
  }
  findOneByCredential(id: number) {
    return this.createQueryBuilder('p').where('p.id =:id', { id }).getOne();
  }
  findIds(ids: number[]) {
    return this.createQueryBuilder('permissions')
      .where('permissions.id IN (:...ids)', { ids })
      .getMany();
  }
}
