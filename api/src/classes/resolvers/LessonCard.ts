import {
  Resolver,
  Arg,
  Query,
  Mutation,
  ObjectType,
  Field,
} from "type-graphql";
import { getConnection } from "typeorm";
import { FieldError } from "../../common/types/Error";
import { Lesson } from "../entities/Lesson.entity";
import { LessonCard } from "../entities/LessonCard.entity";

@ObjectType()
class LessonCardResponse {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => LessonCard, { nullable: true })
  lessonCard?: LessonCard;

  @Field(() => [LessonCard], { nullable: true })
  lessonCards?: LessonCard[];
}

@Resolver(LessonCard)
export default class LessonCardResolver {
  @Query(() => LessonCardResponse)
  async retrieveLessonCard(@Arg("id") id: string): Promise<LessonCardResponse> {
    try {
      const lessonCard: LessonCard | undefined = await LessonCard.findOne({
        where: { id: id },
      });
      if (!lessonCard) {
        return {
          error: {
            message: "No lesson found",
          },
        };
      }
      return {
        lessonCard: lessonCard,
      };
    } catch (err) {
      return {
        error: {
          message: "error",
        },
      };
    }
  }

  @Query(() => LessonCardResponse)
  async listLessonCards(): Promise<LessonCardResponse> {
    try {
      const result: LessonCard[] = await getConnection().manager.find(
        LessonCard
      );
      return { lessonCards: result };
    } catch (err) {
      return {
        error: {
          message: "Error getting lessons",
        },
      };
    }
  }

  @Mutation(() => LessonCardResponse)
  async createLessonCard(
    @Arg("title") title: string,
    @Arg("lesson") lessonId: string,
    @Arg("subtitle", { nullable: true }) subtitle?: string,
    @Arg("imageUrl", { nullable: true }) imageUrl?: string
  ): Promise<LessonCardResponse> {
    try {
      const lesson: Lesson | undefined = await Lesson.findOne({
        where: { id: lessonId },
      });
      const lessonCard: LessonCard = await LessonCard.create({
        title: title,
        lesson: lesson,
        subtitle: subtitle,
        imageUrl: imageUrl,
      }).save();
      return { lessonCard: lessonCard };
    } catch (err) {
      return {
        error: {
          message: "Error creating lesson",
        },
      };
    }
  }

  @Mutation(() => LessonCardResponse)
  async updateLessonCard(
    @Arg("id") id: string,
    @Arg("title", { nullable: true }) title?: string,
    @Arg("lesson", { nullable: true }) lessonId?: string,
    @Arg("subtitle", { nullable: true }) subtitle?: string,
    @Arg("imageUrl", { nullable: true }) imageUrl?: string
  ): Promise<LessonCardResponse> {
    try {
      const lessonCard: LessonCard | undefined = await LessonCard.findOne({
        where: { id: id },
      });
      if (lessonCard === undefined) throw "No lesson card found";
      let lesson: Lesson | undefined = undefined;
      if (lessonId) {
        lesson = await Lesson.findOne({
          where: { id: lessonId },
        });
      }
      lessonCard.title = title || lessonCard.title;
      lessonCard.subtitle = subtitle || lessonCard.subtitle;
      lessonCard.imageUrl = imageUrl || lessonCard.imageUrl;
      lessonCard.lesson = lesson || lessonCard.lesson;
      lessonCard.save();
      return {
        lessonCard: lessonCard,
      };
    } catch (err) {
      return {
        error: {
          message: "Error updating lesson",
        },
      };
    }
  }
}
