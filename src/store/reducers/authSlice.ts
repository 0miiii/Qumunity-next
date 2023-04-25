import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteAccessTokenFromLocalStorage } from "@/libs/tokenHandler";

interface AuthState {
  isLoggedIn: boolean;
  // nickname: undefined | string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  // nickname: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      // state.nickname = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      deleteAccessTokenFromLocalStorage();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
