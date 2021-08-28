import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createTableScraps1630097662571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "scraps",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "scrap",
                        type: "varchar",
                        length: "250",
                        isNullable: false
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "50",
                        isNullable:false
                    },
                    {
                        name: "id_user",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    new TableForeignKey({
                        columnNames: ["id_users"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users"
                    })
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('scraps', true, true, true)
    }

}
