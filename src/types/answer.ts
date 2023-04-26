import { IPost } from "./post";
import { IUser } from "./user";

export interface IAnswer {
  post: IPost;
  author: IUser;
  content: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
}
