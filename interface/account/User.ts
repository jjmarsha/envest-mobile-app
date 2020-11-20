import { IBase } from "../common/Base";

export interface IUser extends IBase {
  firstName?: string;
  lastName?: string;
  username?: string;
  email: string;
  dob?: Date;
}
