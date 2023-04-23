import { format } from "timeago.js";

export const transformCreatedAt = (createdAt: string) => {
  const removeDecimal = createdAt.substring(0, createdAt.lastIndexOf("."));
  return format(removeDecimal, "en_US");
};
