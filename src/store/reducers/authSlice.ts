import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
//   saveAccessTokenInLocalStorage,
//   deleteAccessTokenFromLocalStorage,
//   getAccessTokenFromLocalStorage,
// } from "../../libs/tokenHandler";

interface AuthState {
  isLoggedIn: boolean;
}

// const token = getAccessTokenFromLocalStorage();

const initialState: AuthState = {
  isLoggedIn: false,
  // isLoggedIn: !!token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state, action: PayloadAction<string>) => {
    //   state.isLoggedIn = true;
    //   saveAccessTokenInLocalStorage(action.payload);
    // },
    // logout: (state) => {
    //   state.isLoggedIn = false;
    //   deleteAccessTokenFromLocalStorage();
    // },
  },
});

// export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
