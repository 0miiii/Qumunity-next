import instance from "./intance";

interface IAuthResponse {
  token: string;
}

interface IVerifyResponse {
  _id: string;
  nickname: string;
  photoURL: string;
  iat: number;
  exp: number;
}

export interface ISignInUserInfo {
  email: string;
  password: string;
}

export interface ISignUpUserInfo extends ISignInUserInfo {
  nickname: string;
}

const API_URL = {
  SIGN_IN: "/auth/signin",
  SIGN_UP: "/auth/signu",
  VERIFY_TOKEN: "/auth/verify_token",
};

export const signInRequest = (userinfo: ISignInUserInfo) => {
  return instance
    .post<IAuthResponse>(API_URL.SIGN_IN, userinfo)
    .then((res) => res.data);
};

export const signUpRequest = (userinfo: ISignUpUserInfo) => {
  return instance
    .post<IAuthResponse>(API_URL.SIGN_UP, userinfo)
    .then((res) => res.data);
};

export const verifyTokenRequest = () => {
  return instance
    .get<IVerifyResponse>(API_URL.VERIFY_TOKEN)
    .then((res) => res.data);
};
