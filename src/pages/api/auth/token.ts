import type { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "@/libs/jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(400).json({ error: "get 요청인지 확인해주세요" });
  }

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json("토큰이 없습니다");
  }

  try {
    const decoded = verifyToken(token);
    return res.status(200).json(decoded);
  } catch (err) {
    console.error(err);
    return res.status(401).json("토큰이 유효하지 않습니다");
  }
}
