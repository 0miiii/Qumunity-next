import instance from "./intance";
import { IUser, IPost, IAnswer } from "@/types";

type TContent = "post" | "answer" | "bookmark";

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
// export const getUserPost = (
//   content: TContent,
//   userId: string,
//   page: number,
//   limit: number
// ) => {
//   return instance
//     .get<IPost[] | IAnswer[]>(
//       `/user/${userId}/${content}?page=${page}&limit=${limit}`
//     )
//     .then((res) => res.data);
// };
