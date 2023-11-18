export interface RoleInterface {
  id: number;
  name: string;
  slug: string;
  userIds: number[];
  permissionIds: number[];
}
