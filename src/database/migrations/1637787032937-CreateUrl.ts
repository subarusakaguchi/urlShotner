import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUrl1637787032937 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'urls',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'code',
                        type: 'varchar',
                    },
                    {
                        name: 'original_url',
                        type: 'varchar',
                    },
                    {
                        name: 'created__at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('urls');
    }
}
