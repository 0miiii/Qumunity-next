import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "@/models/userModel";
import dbConnect from "@/libs/mongoose";

export default async function handler(
  req: NextApiRequest,
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
      const page = Number(req.query.page);
      const limit = Number(req.query.limit);
      if (!page || !limit) {
        return res.status(400).json("적절하지 않은 query 입니다");
      }

      const users = await UserModel.find();
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const filteredData = users.slice(startIndex, endIndex);

      return res.status(200).json(filteredData);
    } catch (err) {
      console.error(err);
      return res.status(400).json("유저 찾기에 실패했습니다");
    }
  }
}
