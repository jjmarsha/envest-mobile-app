import { Entity, Column } from "typeorm";
import { Base } from "../../common/entities/Base.entity";
import { IUser } from "../../../../interface/account/User";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class BaseUser extends Base implements IUser {
  @Field()
  @Column({ nullable: true })
  firstName: string;

  @Field()
  @Column({ nullable: true })
  lastName: string;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Field()
  @Column({ unique: true, nullable: true })
  email: string;

  @Field()
  @Column({ nullable: true })
  dob: Date;
}
