/** @format */

import { createSlice } from "@reduxjs/toolkit";

// type UserState = {
//   isLogedin: boolean;
//   accessToken: null;
// };

// const initialState: UserState = {
//   isLogedin: false,
//   accessToken: null,
// };

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedin: false,
    accessToken: null,
    userName: null,
    userRole: null
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isLoggedin = true;
      state.userName = action.payload.userName;
      state.userRole = action.payload.userRole;
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.accessToken = null;
      state.userName = null;
      state.userRole = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
