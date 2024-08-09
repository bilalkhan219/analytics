import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAnalyticsTable1721331601687 implements MigrationInterface {
    name = 'CreateAnalyticsTable1721331601687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "analytics" ("id" SERIAL NOT NULL, "visitorId" integer NOT NULL, "pageName" character varying NOT NULL, "timeSpent" character varying NOT NULL, CONSTRAINT "PK_3c96dcbf1e4c57ea9e0c3144bff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "analytics"`);
    }

}
