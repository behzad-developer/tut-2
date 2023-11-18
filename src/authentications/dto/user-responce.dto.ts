import { UserEntity } from 'src/users/entities/user.entity';
import { UserStatusEnum } from 'src/users/enums';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { RoleEntity } from 'src/roles/entities/role.entity';
import { UserTypeEntity } from 'src/manager/user-types/entities/user-type.entity';
import { TokenInterface } from 'src/authentications/interfaces';
export class UserResponseDto {
  firstName: string;
  lastName: string;
  phonenumber: number;
  status: UserStatusEnum;
  type?: UserTypeEntity;
  roles?: RoleEntity[];
  permissions?: PermissionEntity[];
  createdBy?: UserEntity;
  updatedBy?: UserEntity;
  tokens?: TokenInterface;

  constructor(user: UserEntity, token?: TokenInterface) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.permissions = user.permissions;
    // this.phonenumber = parseInt(user.phonenumber);
    // this.status = user.status;
    this.roles = user.roles;
    this.tokens = token;
    this.type = user.type;
    // this.createdBy = user.createdBy;
    this.updatedBy = user.updatedBy;
  }
}
