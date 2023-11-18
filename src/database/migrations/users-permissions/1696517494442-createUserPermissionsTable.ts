import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'users_permissions';
const userTableName = 'users';
const permissionTableName = 'permissions';

export class CreateUserPermissionsTable1696517494442
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'user_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'permission_id',
            type: 'integer',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: userTableName,
          },
          {
            columnNames: ['permission_id'],
            referencedColumnNames: ['id'],
            referencedTableName: permissionTableName,
          },
        ],
      }),
      true,
      true,
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName, true, true, true);
  }
}
