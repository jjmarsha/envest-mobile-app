import { buildSchema } from "type-graphql";
import BaseUserResolver from "./account/resolvers/BaseUser";
import LessonResolver from "./classes/resolvers/Lesson";
import LessonCardResolver from "./classes/resolvers/LessonCard";
import HelloWorldResolver from "./HelloWorldResolver";

const root = buildSchema({
  resolvers: [
    HelloWorldResolver,
    BaseUserResolver,
    LessonResolver,
    LessonCardResolver,
  ],
  validate: false,
});

export default root;
