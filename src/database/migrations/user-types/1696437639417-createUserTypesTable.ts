import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'user_types';

export class CreateUserTypesTable1696437639417 implements MigrationInterface {
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
            name: 'cost',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'is_default',
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
