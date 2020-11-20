import { Entity, Column, ManyToOne } from "typeorm";
import { Base } from "../../common/entities/Base.entity";
import { Field, ObjectType } from "type-graphql";
import { ILessonCard } from "../../../../interface/classes/LessonCard";
import { Lesson } from "./Lesson.entity";

@ObjectType()
@Entity()
export class LessonCard extends Base implements ILessonCard {
  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  subtitle: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  imageUrl: string;

  @Field()
  @ManyToOne(() => Lesson)
  lesson: Lesson;
}
