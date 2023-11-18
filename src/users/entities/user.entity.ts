import { AddressEntity } from 'src/addresses/entities/address.entity';
import { RegionEntity } from 'src/manager/regions/entities/region.entity';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { RoleEntity } from 'src/roles/entities/role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'integer',
  })
  id: number;

  @Column({
    name: 'first_name',
    type: 'varchar',
    length: '50',
    nullable: false,
    unique: true,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: '50',
    nullable: false,
    unique: true,
  })
  lastName: string;

  @Column({
    name: 'phonenumber',
    type: 'varchar',
    length: '10',
    nullable: false,
    unique: true,
  })
  phonenumber: number;

  @Column({
    name: 'password',
    type: 'varchar',
    length: '100',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'type_id',
    type: 'integer',
    nullable: false,
  })
  typeId: number;

  @Column({
    name: 'status',
    type: 'varchar',
    length: '20',
    nullable: false,
  })
  status: string;

  @Column({
    name: 'createdBy',
    type: 'integer',
    length: '20',
    nullable: false,
  })
  createdBy: number;

  @ManyToMany(() => RoleEntity, (roles) => roles.users)
  @JoinTable({
    name: 'users_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles: RoleEntity[];

  @ManyToMany(() => PermissionEntity, (Permissions) => Permissions.users)
  @JoinTable({
    name: 'users_permissions',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
    },
  })
  permissions: PermissionEntity[];

  @ManyToOne(() => AddressEntity, (addresses) => addresses.users)
  @JoinColumn({
    name: 'address_id',
    referencedColumnName: 'id',
  })
  address: AddressEntity[];

  @ManyToOne(() => RegionEntity, (regions) => regions.users)
  @JoinColumn({
    name: 'region_id',
    referencedColumnName: 'id',
  })
  region: RegionEntity[];
  updatedBy: UserEntity;

  constructor(user?: Partial<UserEntity>) {
    Object.assign(this, user);
  }
}
