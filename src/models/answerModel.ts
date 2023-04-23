import { Schema, model, Document, models } from "mongoose";
import { IUser } from "./userModel";
import { IPost } from "./postModel";

export interface IAnswer extends Document {
  content: string;
  votes: number;
  author: IUser;
  post: IPost;
  createdAt: string;
  updatedAt: string;
}

const answerSchema = new Schema<IAnswer>(
  {
    content: String,
    votes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    post: { type: Schema.Types.ObjectId, ref: "Post" },
  },
  { collection: "answers", timestamps: true }
);

export default models.Answer || model<IAnswer>("Answer", answerSchema);
