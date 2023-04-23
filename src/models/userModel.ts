import { Schema, model, Document, models } from "mongoose";
import { hashPassword } from "../libs/bcryptjs";

export interface IUser extends Document {
  email: string;
  password: string;
  nickname: string;
  photoURL: string;
  questions: number;
  answers: number;
  bookmarks: number;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    photoURL: { type: String, required: true },
    questions: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
    bookmarks: { type: Number, default: 0 },
  },
  { collection: "users" }
);

userSchema.pre<IUser>("save", async function (next) {
  this.password = await hashPassword(this.password);
  next();
});

export default models.User || model<IUser>("User", userSchema);
