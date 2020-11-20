import { Entity, Column, ManyToOne } from "typeorm";
import { Base } from "../../common/entities/Base.entity";
import { Field, ObjectType } from "type-graphql";
import { IContent } from "../../../../interface/classes";
import { LessonCard } from "./LessonCard.entity";

@ObjectType()
@Entity()
export class Content extends Base implements IContent {
  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  data: string;

  @Field()
  @ManyToOne(() => LessonCard)
  lessonCard: LessonCard;
}
