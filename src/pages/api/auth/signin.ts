import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/libs/mongoose";
import UserModel from "@/models/userModel";
import { verifyPassword } from "@/libs/bcryptjs";
import { createToken } from "@/libs/jsonwebtoken";

interface INextApiRequest extends NextApiRequest {
  body: {
    email: string;
    password: string;
  };
}

export default async function handler(
  req: INextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "post 요청인지 확인해주세요" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "모든 정보를 입력해야 합니다" });
  }

  try {
    await dbConnect();
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: "존재하지 않는 유저입니다" });
    }

    const matchPassword = await verifyPassword(password, user.password);

    if (!matchPassword) {
      return res.status(400).json({ error: "비밀번호가 일치하지 않습니다" });
    }

    return res.status(200).json({
      token: createToken({ _id: user._id, nickname: user.nickname }),
      user: {
        _id: user._id,
        nickname: user.nickname,
        photo: user.photoURL,
        questions: user.questions,
        answers: user.answers,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json("로그인에 실패했습니다");
  }
}
