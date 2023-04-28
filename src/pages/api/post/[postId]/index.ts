import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "@/models/userModel";
import PostModel from "@/models/postModel";
import AnswerModel from "@/models/answerModel";
import dbConnect from "@/libs/mongoose";
import { verifyToken } from "@/libs/jsonwebtoken";

interface INextApiRequest extends NextApiRequest {
  body: {
    title: string;
    content: string;
    tags: string[];
  };
}

interface IDecoded {
  _id: string;
  iat: number;
  exp: number;
}

export default async function handler(
  req: INextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return res.status(400).json({ error: "post 요청은 적절하지 않습니다" });
  }

  try {
    await dbConnect();
  } catch (err) {
    console.error(err);
    return res.status(400).json("DB 연결에 실패했습니다");
  }

  if (req.method === "GET") {
    try {
      const { postId } = req.query;
      const findedPost = await PostModel.findByIdAndUpdate(
        postId,
        { $inc: { views: 1 } },
        { new: true }
      ).populate({
        path: "author",
        select: "-password",
      });
      const findedAnswerOnPost = await AnswerModel.find({ post: postId });
      return res
        .status(200)
        .json({ post: findedPost, answers: findedAnswerOnPost });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "게시물 찾기에 실패했습니다" });
    }
  }

  // ============ middleware로 분리해야함 ==================
  const token = req.headers.authorization;
  let userId;

  if (!token) {
    return res.status(401).json("토큰이 존재하지 않습니다");
  }

  try {
    const decodedToken = verifyToken(token) as IDecoded;
    userId = decodedToken._id;
  } catch (err) {
    console.error(err);
    return res.status(401).json("토큰이 유효하지 않습니다");
  }
  // =======================================================

  if (req.method === "DELETE") {
    try {
      const { postId } = req.query;
      await UserModel.findByIdAndUpdate(userId, { $inc: { questions: -1 } });
      await PostModel.findByIdAndDelete(postId);
      await AnswerModel.deleteMany({ post: postId });
      return res.status(200).json("게시물을 삭제했습니다");
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "게시물 삭제에 실패했습니다" });
    }
  }

  if (req.method === "PUT") {
    const { postId } = req.query;
    const { title, content, tags } = req.body;

    if (!title || !content || !tags) {
      return res.status(400).json({ error: "모든 정보를 입력해주세요" });
    }

    try {
      const updatedPost = await PostModel.findByIdAndUpdate(
        postId,
        { $set: req.body },
        { new: true }
      );

      if (!updatedPost) {
        return res.status(400).json({ error: "게시물이 존재하지 않습니다" });
      }

      return res.status(200).json(updatedPost);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "게시물 수정에 실패했습니다" });
    }
  }
}
