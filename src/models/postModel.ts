import { Schema, model, Document, models } from "mongoose";
import { IUser } from "./userModel";

export interface IPost extends Document {
  title: string;
  content: string;
  tags: string[];
  views: number;
  votes: number;
  answers: number;
  author: IUser;
  createdAt: string;
  updatedAt: string;
}

const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    answers: { type: Number, default: 0, required: true },
    views: { type: Number, default: 0, required: true },
    votes: { type: Number, default: 0, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { collection: "posts", timestamps: true }
);

postSchema.pre<IPost>(["find", "findOne"], async function (next) {
  this.populate({
    path: "author",
    select: "-password",
  });
  next();
});

export default models.Post || model<IPost>("Post", postSchema);
