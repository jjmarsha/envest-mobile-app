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

@ObjectType()
class LessonResponse {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => Lesson, { nullable: true })
  lesson?: Lesson;

  @Field(() => [Lesson], { nullable: true })
  lessons?: Lesson[];
}

@Resolver(Lesson)
export default class LessonResolver {
  @Query(() => LessonResponse)
  async retrieveLesson(@Arg("id") id: string): Promise<LessonResponse> {
    try {
      const lesson: Lesson | undefined = await Lesson.findOne({
        where: { id: id },
      });
      if (!lesson) {
        return {
          error: {
            message: "No lesson found",
          },
        };
      }
      return {
        lesson: lesson,
      };
    } catch (err) {
      return {
        error: {
          message: "error",
        },
      };
    }
  }

  @Query(() => LessonResponse)
  async listLessons(): Promise<LessonResponse> {
    try {
      const result: Lesson[] = await getConnection().manager.find(Lesson);
      return { lessons: result };
    } catch (err) {
      return {
        error: {
          message: "Error getting lessons",
        },
      };
    }
  }

  @Mutation(() => LessonResponse)
  async createLesson(
    @Arg("name") name: string,
    @Arg("index") index: number
  ): Promise<LessonResponse> {
    try {
      const lesson: Lesson = await Lesson.create({
        name: name,
        index: index,
      }).save();
      return { lesson: lesson };
    } catch (err) {
      return {
        error: {
          message: "Error creating lesson",
        },
      };
    }
  }

  @Mutation(() => LessonResponse)
  async updateLesson(
    @Arg("id") id: string,
    @Arg("name", { nullable: true }) name?: string,
    @Arg("index", { nullable: true }) index?: number
  ): Promise<LessonResponse> {
    try {
      const lesson = await Lesson.findOne({
        where: { id: id },
      });
      if (lesson === undefined) throw "No lesson found";
      lesson.name = name || lesson.name;
      lesson.index = index || lesson.index;
      lesson.save();
      return {
        lesson: lesson,
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
