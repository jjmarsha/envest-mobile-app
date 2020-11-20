import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1600556855598 implements MigrationInterface {
    name = 'migration1600556855598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "base_user" ("id" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "firstName" character varying, "lastName" character varying, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying, "dob" TIMESTAMP, CONSTRAINT "UQ_5ed9f207839f7e7acd94876250d" UNIQUE ("username"), CONSTRAINT "UQ_28c4f981c5608c6c02b4319efc2" UNIQUE ("email"), CONSTRAINT "PK_fb59959fd207defc2d090661488" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "base_user"`);
    }

}
