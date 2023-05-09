import instance from "./intance";
import { IUser, IPost, IAnswer } from "@/types";

interface IGetUserInfo {
  userInfo: IUser;
  userPosts: IPost[];
  userAnswers: IAnswer[];
}

export const getUsers = (page: number, limit: number) => {
  return instance
    .get<IUser[]>(`/user?page=${page}&limit=${limit}`)
    .then((res) => res.data);
};

export const getUserPost = (userId: string, page: number, limit: number) => {
  return instance
    .get<IPost[]>(`/user/${userId}/post?page=${page}&limit=${limit}`)
    .then((res) => res.data);
};

export const getUserInfo = (userId: string) => {
  return instance.get<IGetUserInfo>(`/user/${userId}`).then((res) => res.data);
};
