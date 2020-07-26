import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointments1595743264208 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(
      new Table({
        "name": "appointments",
        columns: [
          {
            name: "id",
            type: "varchar",
            generationStrategy: "uuid",
            isPrimary: true,
          },
          {
            name: "provider",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "date",
            type: "timestamp with time zone",
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }

}
