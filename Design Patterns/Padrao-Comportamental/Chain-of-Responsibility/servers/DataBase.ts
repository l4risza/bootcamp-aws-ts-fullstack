import PermissionType from "./PermissionType";

const DataBase = [
  {
    email: 'larissa@admin.com',
    password: 'u53rp455',
    permission: PermissionType.ADMIN
  },
  {
    email: 'larissa@user.com',
    password: '123456',
    permission: PermissionType.USER
  }
];

export default DataBase;
