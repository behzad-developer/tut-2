import { RoleEntity } from 'src/roles/entities/role.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'permissions',
})
export class PermissionEntity {
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

  @ManyToMany(() => RoleEntity, (roles) => roles.permissions)
  roles: RoleEntity[];

  constructor(permission?: Partial<PermissionEntity>) {
    Object.assign(this, permission);
  }
}
