import instance from "./intance";
import { IAnswer } from "@/types";

export interface IAnswerCreateReq {
  postId: string;
  content: string;
}

export const createAnswer = (answer: IAnswerCreateReq) => {
  return instance
    .post<IAnswer>(`/post/${answer.postId}/answer`, {
      content: answer.content,
    })
    .then((res) => res.data);
};
