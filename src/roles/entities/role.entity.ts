import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'roles',
})
export class RoleEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'integer',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    name: 'slug',
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  slug: string;

  @ManyToMany(() => UserEntity, (users) => users.roles)
  users: UserEntity[];

  @ManyToMany(() => PermissionEntity, (permissions) => permissions.roles)
  @JoinTable({
    name: 'roles_permissions',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
    },
  })
  permissions: PermissionEntity[];
  roles: RoleEntity[];

  constructor(role?: Partial<RoleEntity>) {
    Object.assign(this, role);
  }
}
