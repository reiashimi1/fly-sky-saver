import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import spinnerSlice from "./spinnerSlice";
import authSlice from "./authSlice.js";
import {userSlice} from "./userSlice.js";

export const store = configureStore({
  reducer: { counterSlice, spinnerSlice, authSlice },
});
