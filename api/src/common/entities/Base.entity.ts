import { BaseEntity, Column, PrimaryColumn } from "typeorm";
import { IBase } from "../../../../interface/common/Base";
import { v4 as uuid } from "uuid";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Base extends BaseEntity implements IBase {
  @Field()
  @PrimaryColumn()
  id: string = uuid();

  @Field()
  @Column()
  createdAt: Date = new Date();

  @Field()
  @Column()
  updatedAt: Date = new Date();
}
