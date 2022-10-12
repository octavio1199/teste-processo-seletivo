import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVeiculos1665433613980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
				await queryRunner.createTable(
					new Table({
						name: "veiculos",
						columns: [
							{
								name: "id",
								type: "char",
								isPrimary: true,
								generationStrategy: 'uuid',
								isGenerated: true,
							},
							{
								name: "placa",
								type: "varchar(10)"
							},
							{
								name: "chassi",
								type: "varchar(30)",
							},
							{
								name: "renavam",
								type: "varchar(20)",
							},
							{
								name: "marca",
								type: "varchar(255)",
								isNullable: true,
							},
							{
								name: "modelo",
								type: "varchar(255)"
							},
							{
								name: "ano",
								type: "integer",
								isNullable: true,
							},
							{
								name: "created_at",
								type: "timestamp",
								default: "CURRENT_TIMESTAMP",
							},
							{
								name: "updated_at",
								type: "timestamp",
								default: "CURRENT_TIMESTAMP",
							},
							{
								name: "deleted_at",
								type: "timestamp",
								isNullable: true,
							}
						],
					})
				);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable("veiculos"); 
    }

}
