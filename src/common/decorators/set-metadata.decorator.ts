import { SetMetadata } from '@nestjs/common';

export const SetPermission = (values: string[]) =>
  SetMetadata('PERMISSIONS', values);
