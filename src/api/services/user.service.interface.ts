import { IUser } from "../../lib/types";

export interface IUserService {
  readonly getAllUsers: () => Promise<IUser[]>;
}
