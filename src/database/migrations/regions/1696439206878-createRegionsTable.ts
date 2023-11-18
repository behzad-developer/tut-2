import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'regions';

export class CreateRegionsTable1696439206878 implements MigrationInterface {
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
            length: '250',
            isNullable: false,
            isUnique: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
