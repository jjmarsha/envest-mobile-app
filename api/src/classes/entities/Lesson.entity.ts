import { Entity, Column } from "typeorm";
import { Base } from "../../common/entities/Base.entity";
import { Field, ObjectType } from "type-graphql";
import { ILesson } from "../../../../interface/classes/";

@ObjectType()
@Entity()
export class Lesson extends Base implements ILesson {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  index: number;
}
