import { hash, compare } from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hashedPassword: string = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (
  enteredPassword: string,
  hashedPassword: string
) => {
  const isValid: boolean = await compare(enteredPassword, hashedPassword);
  return isValid;
};
