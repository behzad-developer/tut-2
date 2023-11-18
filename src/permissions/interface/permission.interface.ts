export interface PermissionInterface {
  id: number;
  name: string;
  slug: string;
  userIds: number[];
  roleIds: number[];
}
