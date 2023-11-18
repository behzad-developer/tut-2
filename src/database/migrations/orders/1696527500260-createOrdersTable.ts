import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'orders';
const userAddressesTableName = 'user_addresses';
const usersTableName = 'users';
const orderStatusTableName = 'order_statuses';

export class CreateOrdersTable1696527500260 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            isNullable: false,
            isPrimary: true,
            isUnique: true,
          },
          {
            name: 'order_no',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'cost',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'address_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'client_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'courier_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'status_id',
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
            columnNames: ['address_id'],
            referencedColumnNames: ['id'],
            referencedTableName: userAddressesTableName,
          },
          {
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: usersTableName,
          },
          {
            columnNames: ['courier_id'],
            referencedColumnNames: ['id'],
            referencedTableName: usersTableName,
          },
          {
            columnNames: ['status_id'],
            referencedColumnNames: ['id'],
            referencedTableName: orderStatusTableName,
          },

          {
            columnNames: ['created_by_id'],
            referencedColumnNames: ['id'],
            referencedTableName: usersTableName,
          },
          {
            columnNames: ['updated_by_id'],
            referencedColumnNames: ['id'],
            referencedTableName: usersTableName,
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
