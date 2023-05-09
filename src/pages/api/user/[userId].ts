import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/libs/mongoose";
import PostModel from "@/models/postModel";
import UserModel from "@/models/userModel";
import AnswerModel from "@/models/answerModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(400).json("적절하지 않은 method 입니다");
  }

  try {
    await dbConnect();
  } catch (err) {
    console.error(err);
    return res.status(400).json("DB 연결에 실패했습니다.");
  }

  try {
    const userId = req.query.userId;
    const userInfo = await UserModel.findById(userId).select("-password");
    const userPosts = await PostModel.find({ author: userId });
    const userAnswers = await AnswerModel.find({ author: userId });

    return res.status(200).json({ userInfo, userPosts, userAnswers });
  } catch (err) {
    console.error(err);
    return res.status(400).json("게시물 찾기에 실패했습니다");
  }
}
