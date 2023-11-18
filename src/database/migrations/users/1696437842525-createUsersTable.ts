import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'users';
const userTypesTableName = 'user_types';

export class CreateUsersTable1696437842525 implements MigrationInterface {
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
            name: 'first_name',
            type: 'varchar',
            length: '50',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '50',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'phonenumber',
            type: 'varchar',
            length: '8',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'type_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'updated_by_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'created_by_id',
            type: 'integer',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['type_id'],
            referencedColumnNames: ['id'],
            referencedTableName: userTypesTableName,
          },
          {
            columnNames: ['updated_by_id'],
            referencedColumnNames: ['id'],
            referencedTableName: tableName,
          },
          {
            columnNames: ['created_by_id'],
            referencedColumnNames: ['id'],
            referencedTableName: tableName,
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
