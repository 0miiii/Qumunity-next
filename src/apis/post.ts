import instance from "./intance";
import { IPost, IAnswer } from "@/types";

interface ICreateReq {
  title: string;
  content: string;
  tags: string[];
}

interface IGetPostRes {
  post: IPost;
  answers: IAnswer[];
}

export const getPosts = (page: number, limit: number) => {
  return instance
    .get<IPost[]>(`/post?page=${page}&limit=${limit}`)
    .then((res) => res.data);
};

export const getPost = (postId: string) => {
  return instance.get<IGetPostRes>(`/post/${postId}`).then((res) => res.data);
};

export const createPost = (post: ICreateReq) => {
  return instance.post<IPost>("/post", post).then((res) => res.data);
};

export const updatePost = (post: ICreateReq) => {
  return instance.put<IPost>("/post", post).then((res) => res.data);
};

export const deletePost = (postId: string) => {
  return instance.delete<IPost>(`/post/${postId}`).then((res) => res.data);
};
