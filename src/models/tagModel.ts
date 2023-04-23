import { Schema, model, Document, models } from "mongoose";

export interface ITag extends Document {
  name: string;
  count: number;
}

const tagSchema = new Schema<ITag>(
  {
    name: String,
    count: { type: Number, default: 0 },
  },
  { collection: "tags" }
);

const TagModel = model<ITag>("Tag", tagSchema);

export default models.Tag || TagModel;
