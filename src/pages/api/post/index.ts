import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "@/models/userModel";
import PostModel from "@/models/postModel";
import dbConnect from "@/libs/mongoose";
import { verifyToken } from "@/libs/jsonwebtoken";

type TSort = "newest" | "votes" | "views" | "answered" | "unanswered";

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
      const sort = (req.query.sort as TSort) || "newest";
      const search = req.query.search;

      if (!page || !limit) {
        return res.status(400).json("적절하지 않은 query 입니다");
      }

      const sortOptions = {
        newest: { createdAt: -1 },
        votes: { votes: -1 },
        views: { views: -1 },
        answered: { answers: -1 },
        unanswered: { answers: 1 },
      };

      const sortBy = sortOptions[sort] as { [key: string]: 1 | -1 };

      const posts = await PostModel.find({
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
          { tags: { $regex: search, $options: "i" } },
        ],
      }).sort(sortBy);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const filteredData = posts.slice(startIndex, endIndex);

      return res.status(200).json(filteredData);
    } catch (err) {
      console.error(err);
      return res.status(400).json("게시물 찾기에 실패했습니다");
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
      const { title, content, tags } = req.body;

      if (!title || !content || !tags) {
        return res.status(400).json({ error: "모든 정보를 입력해주세요" });
      }

      await UserModel.findByIdAndUpdate(userId, { $inc: { questions: 1 } });
      const newPost = await new PostModel({
        title,
        content,
        tags,
        author: userId,
      }).save();
      return res.status(200).json(newPost);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "게시물 생성에 실패했습니다" });
    }
  }

  return res.status(400).json({ error: "적절하지 않은 method 입니다" });
}
