import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'user_addresses';
const userTableName = 'users';
const regionTableName = 'regions';

export class CreateUserAddressesTable1696518831592
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'id',
            type: 'integer',
            isNullable: false,
            isGenerated: true,
            isUnique: true,
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'is_default',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'region_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'created_by_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'updated_by_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'bigint',
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
            columnNames: ['region_id'],
            referencedColumnNames: ['id'],
            referencedTableName: regionTableName,
          },
          {
            columnNames: ['updated_by_id'],
            referencedColumnNames: ['id'],
            referencedTableName: userTableName,
          },
          {
            columnNames: ['created_by_id'],
            referencedColumnNames: ['id'],
            referencedTableName: userTableName,
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
