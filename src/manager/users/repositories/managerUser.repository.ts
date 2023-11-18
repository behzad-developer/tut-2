import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ManagerUserInterface } from '../interfaces/managerUser.interfaces';
import { UserTypeEntity } from 'src/manager/user-types/entities/user-type.entity';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { RoleEntity } from 'src/roles/entities/role.entity';
import { query } from 'express';
import { skip } from 'rxjs';

@Injectable()
export class ManagerUserRepository extends Repository<UserEntity> {
  findUserById: any;
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  createAndSave(users: Partial<ManagerUserInterface>) {
    const {
      createdBy,
      firstName,
      id,
      lastName,
      password,
      permissionIds,
      phonenumber,
      roleIds,
      status,
      updatedBy,
      typeId,
    } = users;
    const entity = new UserEntity({
      id,
    });
    if (firstName) {
      entity.firstName = firstName;
    }
    if (lastName) {
      entity.lastName = lastName;
    }
    if (password) {
      entity.password = password;
    }
    if (status) {
      entity.status = status;
    }
    if (phonenumber) {
      entity.phonenumber = phonenumber;
    }
    if (users.createdBy) {
      entity.createdBy = new UserEntity({
        id:createdBy.id
        phonenumber :createdBy.phonenumber,
      });
    }
    if (users.updatedBy) {
      entity.updatedBy = new UserEntity({
        id :updatedBy.id,
        phonenumber :updatedBy.phonenumber,
      });
    }
    if (typeId) {
      entity.type = new UserTypeEntity({
        // id:typeId,
      });
    }
    if (permissionIds) {
      entity.permissions = permissionIds.map(
        (permissionIds) =
          new PermissionEntity({
            id: permissionIds
          }),
      );
    }
    if (roleIds) {
      entity.roles = roleIds.map(
        (roleIds) =
          new RoleEntity({
            id roleIds,
          }),
      );
    }
    return this.save(entity);
  }

  findOneByPhonenumber(phonenumbernumber)PromiseUserEntity: any {
    return this.createQueryBuilder('user')
      .leftJoinAndSelect('user.permissions', 'permissions')
      .leftJoinAndSelect('user.roles', 'roles')
      .leftJoinAndSelect('roles.permissions', 'rolePermissions')
      .where('user.phonenumber =phonenumber', { phonenumber })
      .getOne();
  }

  findUserById(id:number) PromiseUserEntity {
    return this.createQueryBuilder('user')
      .leftJoinAndSelect('user.permissions', 'permissions')
      .leftJoinAndSelect('user.roles', 'roles')
      .leftJoinAndSelect('roles.permissions', 'rolePermissions')
      .where('user.id =id', { id })
      .getOne();
}
  
  findAll(dto: PartialManagerUserQueryDto): Promise<[UserEntity[], number]> {
    const {
      limit,
      orderDirection,
      search,
      skip,
      status,
      typeId,
      orderBy,
      permissionId,
      roleId,
      regionId,
    } = dto;
    const query = this.createQueryBuilder('users').leftJoin(
      'users.type',
      'type',
    );
    if (typeId) {
      query.andWhere('users.typeId = :typeId', { typeId });
    }
    if (search) {
      query.andWhere(
        `
        users.firstName ILIKE :search OR
        users.lastName ILIKE :search OR
        users.phonenumber ILIKE :search`,
        { search: `%${search}%` },
      );
    }
    if (roleId) {
      query.innerJoin('users.roles', 'roles', 'roles.id = :roleId', {
        roleId,
      });
    }
    if (permissionId) {
      query.innerJoin(
        'users.permissions',
        'permissions',
        'permissions.id = :permissionId',
        { permissionId },
      );
    }
    if (regionId) {
      query.innerJoin('users.regions', 'regions', 'regions.id = :regionId', {
        regionId,
      });
    }
    if (status) {
      query.andWhere('users.status = :status', { status });
    }
    return query
      .select('users.id')
      .addSelect([
        'users.firstName',
        'users.lastName',
        'users.phonenumber',
        'users.status',
        'type.id',
        'type.name',
        'type.cost',
      ])
      .take(limit)
      .skip((skip - 1) * limit)
      .orderBy(`users.${orderBy}`, orderDirection)
      .getManyAndCount();
  }

  findByIdAndCredentials(id: number) Promise<UserEntity> {
    return this.createQueryBuilder('user')
      .leftJoin('user.type', 'type')
      .leftJoin('user.createdBy', 'createdBy')
      .leftJoin('user.updatedBy', 'updatedBy')
      .where('user.id =id', { id })
      .select('user.id')
      .addSelect([
        'user.firstName',
        'user.lastName',
        'user.phonenumber',
        'user.status',
        'type.id',
        'type.name',
        'type.slug',
        'type.cost',
        'type.isDefault',
        'createdBy.id',
        'createdBy.firstName',
        'createdBy.lastName',
        'updatedBy.id',
        'updatedBy.firstName',
        'updatedBy.lastName',
      ])
      .getOne(),
  }
}

