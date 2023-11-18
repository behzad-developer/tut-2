import { UseGuards, applyDecorators } from '@nestjs/common';
import { SetPermission } from './set-metadata.decorator';
import { JwtAuthGuard } from 'src/authentications/guards/jwt-auth.guard';
import { PermissionGuard } from 'src/authentications/guards/permissions.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

export const Permissions = (...values: string[]) => {
  return applyDecorators(
    SetPermission(values),
    UseGuards(JwtAuthGuard, PermissionGuard),
    ApiBearerAuth(),
  );
};
