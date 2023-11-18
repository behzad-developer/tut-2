import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'order_notes';
const orderTableName = 'orders';
const orderStatusTableName = 'order_statuses';

export class CreateOrderNotesTable1696528517703 implements MigrationInterface {
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
            name: 'order_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'status_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'note',
            type: 'text',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: orderTableName,
          },
          {
            columnNames: ['status_id'],
            referencedColumnNames: ['id'],
            referencedTableName: orderStatusTableName,
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
