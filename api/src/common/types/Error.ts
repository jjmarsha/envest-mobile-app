import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FieldError {
  @Field()
  message: String;
}
