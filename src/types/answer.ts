import { IPost } from "./post";
import { IUser } from "./user";

export interface IAnswer {
  _id: string;
  post: IPost;
  author: IUser;
  content: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
}
