import {
  Resolver,
  Arg,
  Query,
  Mutation,
  ObjectType,
  Field,
  Ctx,
} from "type-graphql";
import { getConnection } from "typeorm";
import Argon from "argon2";
import { BaseUser } from "../entities/BaseUser.entity";
import { FieldError } from "../../common/types/Error";
import { Context } from "../../common/types/Context";

@ObjectType()
class UserResponse {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => BaseUser, { nullable: true })
  user?: BaseUser;

  @Field(() => [BaseUser], { nullable: true })
  users?: BaseUser[];
}

@Resolver(BaseUser)
export default class BaseUserResolver {
  @Query(() => UserResponse)
  async retrieveUser(@Arg("id") id: string): Promise<UserResponse> {
    try {
      const user: BaseUser | undefined = await BaseUser.findOne({
        where: { id: id },
      });
      if (!user) {
        return {
          error: {
            message: "No user found",
          },
        };
      }
      return {
        user: user,
      };
    } catch (err) {
      return {
        error: {
          message: "error",
        },
      };
    }
  }

  @Query(() => UserResponse)
  async listUsers(): Promise<UserResponse> {
    try {
      const result: BaseUser[] = await getConnection().manager.find(BaseUser);
      return { users: result };
    } catch (err) {
      return {
        error: {
          message: "Error getting users",
        },
      };
    }
  }

  @Query(() => UserResponse)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req }: Context
  ): Promise<UserResponse> {
    const user = await BaseUser.findOne({ where: { username: username } });
    if (!user) {
      return {
        error: {
          message: "User does not exist",
        },
      };
    }

    const valid = await Argon.verify(user.password, password);
    if (!valid) {
      return {
        error: {
          message: "Invalid Password",
        },
      };
    }

    req.session!.userId = user.id;

    return { user: user };
  }

  @Mutation(() => UserResponse)
  async registerUser(
    @Arg("username") username: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    console.log(username);
    let user: BaseUser = new BaseUser();
    user.username = username;
    user.password = await Argon.hash(password);
    try {
      const result: BaseUser = await getConnection().manager.save(user);
      return { user: result };
    } catch (err) {
      return {
        error: {
          message: "Username is not unqiue",
        },
      };
    }
  }
}
