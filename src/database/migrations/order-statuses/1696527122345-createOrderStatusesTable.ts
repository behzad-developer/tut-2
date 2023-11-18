import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'order_statuses';

export class CreateOrderStatusesTable1696527122345
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
            isPrimary: true,
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'slug',
            type: 'varchar',
            length: '50',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'color',
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
            name: 'is_note',
            type: 'boolean',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
