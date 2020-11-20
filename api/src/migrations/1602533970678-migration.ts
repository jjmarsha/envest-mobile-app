import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1602533970678 implements MigrationInterface {
    name = 'migration1602533970678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_base_user" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "firstName" varchar, "lastName" varchar, "username" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar, "dob" datetime, CONSTRAINT "UQ_28c4f981c5608c6c02b4319efc2" UNIQUE ("email"), CONSTRAINT "UQ_5ed9f207839f7e7acd94876250d" UNIQUE ("username"))`);
        await queryRunner.query(`INSERT INTO "temporary_base_user"("id", "createdAt", "updatedAt", "firstName", "lastName", "username", "password", "email", "dob") SELECT "id", "createdAt", "updatedAt", "firstName", "lastName", "username", "password", "email", "dob" FROM "base_user"`);
        await queryRunner.query(`DROP TABLE "base_user"`);
        await queryRunner.query(`ALTER TABLE "temporary_base_user" RENAME TO "base_user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "base_user" RENAME TO "temporary_base_user"`);
        await queryRunner.query(`CREATE TABLE "base_user" ("id" character varying PRIMARY KEY NOT NULL, "createdAt" timestamp NOT NULL, "updatedAt" timestamp NOT NULL, "firstName" character varying, "lastName" character varying, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying, "dob" timestamp, CONSTRAINT "UQ_28c4f981c5608c6c02b4319efc2" UNIQUE ("email"), CONSTRAINT "UQ_5ed9f207839f7e7acd94876250d" UNIQUE ("username"))`);
        await queryRunner.query(`INSERT INTO "base_user"("id", "createdAt", "updatedAt", "firstName", "lastName", "username", "password", "email", "dob") SELECT "id", "createdAt", "updatedAt", "firstName", "lastName", "username", "password", "email", "dob" FROM "temporary_base_user"`);
        await queryRunner.query(`DROP TABLE "temporary_base_user"`);
    }

}
