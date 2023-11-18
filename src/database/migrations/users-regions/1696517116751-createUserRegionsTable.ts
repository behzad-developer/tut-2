import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'users_regions';
const userTableName = 'users';
const regionTableName = 'regions';

export class CreateUserRegionsTable1696517116751 implements MigrationInterface {
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
            name: 'region_id',
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
            columnNames: ['region_id'],
            referencedColumnNames: ['id'],
            referencedTableName: regionTableName,
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
