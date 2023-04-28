import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteAuthInfoFromLocalStorage } from "@/libs/tokenHandler";

interface IAuthPayload {
  _id: undefined | string;
  nickname: undefined | string;
  photo: undefined | string;
}

interface AuthState extends IAuthPayload {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  _id: undefined,
  nickname: undefined,
  photo: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthPayload>) => {
      state.isLoggedIn = true;
      state._id = action.payload._id;
      state.nickname = action.payload.nickname;
      state.photo = action.payload.photo;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      deleteAuthInfoFromLocalStorage();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
