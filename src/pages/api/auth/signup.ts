import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/libs/mongoose";
import UserModel from "@/models/userModel";
import { createToken } from "@/libs/jsonwebtoken";

interface INextApiRequest extends NextApiRequest {
  body: {
    nickname: string;
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

  const { email, nickname, password } = req.body;

  if (!email || !nickname || !password) {
    return res.status(400).json({ error: "모든 정보를 입력해야 합니다" });
  }

  try {
    await dbConnect();

    const newUser = await new UserModel({
      nickname,
      photoURL: `https://source.boringavatars.com/beam/130/${nickname}?square`,
      email,
      password,
    }).save();

    const token = createToken({
      _id: newUser._id,
      nickname: newUser.nickname,
      photoURL: newUser.phothURL,
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: "회원가입에 실패했습니다" });
  }
}
