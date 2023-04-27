import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "@/models/userModel";
import PostModel from "@/models/postModel";
import answerModel from "@/models/answerModel";
import dbConnect from "@/libs/mongoose";
import { verifyToken } from "@/libs/jsonwebtoken";

interface INextApiRequest extends NextApiRequest {
  body: {
    content: string;
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
  try {
    await dbConnect();
  } catch (err) {
    console.error(err);
    return res.status(400).json("DB 연결에 실패했습니다.");
  }

  if (req.method === "GET") {
    try {
      const { postId } = req.query;
      const findedAnswer = await answerModel.find({ post: postId });
      return res.status(200).json(findedAnswer);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "답변 찾기에 실패했습니다" });
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

  if (req.method === "POST") {
    try {
      const { content } = req.body;
      const { postId } = req.query;

      if (!content) {
        return res.status(400).json({ error: "내용을 입력해주세요" });
      }

      await UserModel.findByIdAndUpdate(userId, { $inc: { answers: 1 } });
      await PostModel.findByIdAndUpdate(postId, { $inc: { answers: 1 } });
      const newAnswer = await new answerModel({
        content,
        author: userId,
        post: postId,
      }).save();
      return res.status(200).json(newAnswer);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "답변 생성에 실패했습니다" });
    }
  }

  return res.status(400).json({ error: "적절하지 않은 method 입니다" });
}
