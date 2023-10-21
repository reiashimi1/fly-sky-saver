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
    isLogedin: false,
    accessToken: null,
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload;
      state.isLogedin = true;
    },
    logout: (state) => {
      state.isLogedin = false;
      state.accessToken = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
