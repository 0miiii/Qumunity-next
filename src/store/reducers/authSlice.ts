import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteAccessTokenFromLocalStorage } from "@/libs/tokenHandler";

interface IAuthPayload {
  _id: undefined | string;
  nickname: undefined | string;
  photoURL: undefined | string;
  iat: undefined | number;
  exp: undefined | number;
}

interface AuthState extends IAuthPayload {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  _id: undefined,
  nickname: undefined,
  photoURL: undefined,
  iat: undefined,
  exp: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthPayload>) => {
      state.isLoggedIn = true;
      state._id = action.payload._id;
      state.nickname = action.payload.nickname;
      state.photoURL = action.payload.photoURL;
      state.iat = action.payload.iat;
      state.exp = action.payload.exp;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state._id = undefined;
      state.nickname = undefined;
      state.photoURL = undefined;
      state.iat = undefined;
      state.exp = undefined;
      deleteAccessTokenFromLocalStorage();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
