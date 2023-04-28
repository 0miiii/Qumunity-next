import instance from "./intance";
import { IUser } from "@/types";

export const getUsers = (page: number, limit: number) => {
  return instance
    .get<IUser[]>(`/user?page=${page}&limit=${limit}`)
    .then((res) => res.data);
};
