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
    return res.status(400).json("DB 연결에 실패했습니다");
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
      const { postId, answerId } = req.query;
      await UserModel.findByIdAndUpdate(userId, { $inc: { answers: -1 } });
      await PostModel.findByIdAndUpdate(postId, { $inc: { answers: -1 } });
      await answerModel.findByIdAndDelete(answerId);
      return res.status(200).json("답변을 삭제했습니다");
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "답변 삭제에 실패했습니다" });
    }
  }

  if (req.method === "PUT") {
    const { answerId } = req.query;
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: "정보를 입력해주세요" });
    }

    try {
      const updatedAnswer = await answerModel.findByIdAndUpdate(
        answerId,
        { $set: req.body },
        { new: true }
      );

      if (!updatedAnswer) {
        return res.status(400).json({ error: "답변이 존재하지 않습니다" });
      }

      return res.status(200).json(updatedAnswer);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "답변 수정에 실패했습니다" });
    }
  }

  return res.status(400).json({ error: "적절하지 않은 method 입니다" });
}
