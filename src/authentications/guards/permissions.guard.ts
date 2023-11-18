import { PERMISSION_KEY } from 'src/common/constants/constants';
import { UserEntity } from 'src/users/entities/user.entity';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: UserEntity = request.user;
    const permissions = this.reflector.get<string[]>(
      PERMISSION_KEY,
      context.getHandler(),
    );
    if (!permissions.length) {
      return true;
    }
    const userPermissions: string[] = [];
    user.roles.forEach((role) => {
      role.permissions.forEach((permission) => {
        const checkPermission = userPermissions.find(
          (userPermission) => userPermission === permission.slug,
        );
        if (!checkPermission) {
          userPermissions.push(permission.slug);
        }
      });
    });
    user.permissions.forEach((permission) => {
      const checkPermission = userPermissions.find(
        (userPermission) => userPermission === permission.slug,
      );
      if (!checkPermission) {
        userPermissions.push(permission.slug);
      }
    });
    return userPermissions.some((userPermission) =>
      permissions.includes(userPermission),
    );
  }
}
