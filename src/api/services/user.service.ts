import axiosInstance from "./../axios.instance";
import { IUser } from "../../lib/types";

type IGetAllUsersResponse = {
  total: number;
  skip: number;
  limit: number;
  users: IUser[];
};

export default class UserService {
  public static getAllUsers = async (): Promise<IGetAllUsersResponse> => {
    const { data } = await axiosInstance.get(`/users`);
    return data;
  };
}
