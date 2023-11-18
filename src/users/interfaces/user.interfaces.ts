export interface UsersInterface {
  id: number;
  firstName: string;
  lastName: string;
  phonenumber: number;
  password: string;
  typeId: number;
  permissionIds: number[];
  roleIds: number[];
}
