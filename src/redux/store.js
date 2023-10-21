import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import spinnerSlice from "./spinnerSlice";

export const store = configureStore({
  reducer: { counterSlice, spinnerSlice },
});
