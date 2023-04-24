import instance from "./intance";
import { IPost } from "../types/post";

interface ICreateReq {
  title: string;
  content: string;
  tags: string[];
}

export const getPosts = (page: number, limit: number) => {
  return instance
    .get<IPost[]>(`/post?page=${page}&limit=${limit}`)
    .then((res) => res.data);
};

export const getPost = (postId: string) => {
  return instance.get<IPost>(`/post/${postId}`).then((res) => res.data);
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
