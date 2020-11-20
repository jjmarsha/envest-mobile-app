import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1602534297453 implements MigrationInterface {
    name = 'migration1602534297453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lesson" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "name" varchar NOT NULL, "index" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "lesson_card" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "title" varchar NOT NULL, "subtitle" varchar, "imageUrl" varchar, "lessonId" varchar)`);
        await queryRunner.query(`CREATE TABLE "content" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "type" varchar NOT NULL, "data" varchar NOT NULL, "lessonCardId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_lesson_card" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "title" varchar NOT NULL, "subtitle" varchar, "imageUrl" varchar, "lessonId" varchar, CONSTRAINT "FK_4b34c80a0765aa206e37088a27c" FOREIGN KEY ("lessonId") REFERENCES "lesson" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_lesson_card"("id", "createdAt", "updatedAt", "title", "subtitle", "imageUrl", "lessonId") SELECT "id", "createdAt", "updatedAt", "title", "subtitle", "imageUrl", "lessonId" FROM "lesson_card"`);
        await queryRunner.query(`DROP TABLE "lesson_card"`);
        await queryRunner.query(`ALTER TABLE "temporary_lesson_card" RENAME TO "lesson_card"`);
        await queryRunner.query(`CREATE TABLE "temporary_content" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "type" varchar NOT NULL, "data" varchar NOT NULL, "lessonCardId" varchar, CONSTRAINT "FK_ec243e8286b66a01bd62b4b7b1a" FOREIGN KEY ("lessonCardId") REFERENCES "lesson_card" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_content"("id", "createdAt", "updatedAt", "type", "data", "lessonCardId") SELECT "id", "createdAt", "updatedAt", "type", "data", "lessonCardId" FROM "content"`);
        await queryRunner.query(`DROP TABLE "content"`);
        await queryRunner.query(`ALTER TABLE "temporary_content" RENAME TO "content"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" RENAME TO "temporary_content"`);
        await queryRunner.query(`CREATE TABLE "content" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "type" varchar NOT NULL, "data" varchar NOT NULL, "lessonCardId" varchar)`);
        await queryRunner.query(`INSERT INTO "content"("id", "createdAt", "updatedAt", "type", "data", "lessonCardId") SELECT "id", "createdAt", "updatedAt", "type", "data", "lessonCardId" FROM "temporary_content"`);
        await queryRunner.query(`DROP TABLE "temporary_content"`);
        await queryRunner.query(`ALTER TABLE "lesson_card" RENAME TO "temporary_lesson_card"`);
        await queryRunner.query(`CREATE TABLE "lesson_card" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "title" varchar NOT NULL, "subtitle" varchar, "imageUrl" varchar, "lessonId" varchar)`);
        await queryRunner.query(`INSERT INTO "lesson_card"("id", "createdAt", "updatedAt", "title", "subtitle", "imageUrl", "lessonId") SELECT "id", "createdAt", "updatedAt", "title", "subtitle", "imageUrl", "lessonId" FROM "temporary_lesson_card"`);
        await queryRunner.query(`DROP TABLE "temporary_lesson_card"`);
        await queryRunner.query(`DROP TABLE "content"`);
        await queryRunner.query(`DROP TABLE "lesson_card"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
    }

}
