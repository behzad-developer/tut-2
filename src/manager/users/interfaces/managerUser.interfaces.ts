export interface ManagerUserInterface {
  id: number;
  firstName: string;
  lastName: string;
  phonenumber: number;
  password: string;
  typeId: number;
  permissionIds: number[];
  roleIds: number[];
  status: string;
  updatedBy: number[];
  createdBy: number[];
}
