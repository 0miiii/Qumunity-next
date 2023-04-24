import { IUser } from "./user";

export interface IPost {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  answers: number;
  views: number;
  votes: number;
  author: IUser;
  createdAt: string;
  updatedAt: string;
}
