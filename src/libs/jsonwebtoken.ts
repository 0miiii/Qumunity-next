import jwt from "jsonwebtoken";

interface Ipayload {
  _id: string;
  nickname: string;
  photoURL: string;
}

export const createToken = (payload: Ipayload) => {
  return jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string, {
    expiresIn: "10m",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string);
};
