import { createSlice } from "@reduxjs/toolkit";

// export interface SpinnerState {
//     show: boolean;
//     text?: string;
// }

// const initialState: SpinnerState = {
//     show: false,
//     text: ''
// };

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState: {
    show: false,
    text: "",
  },
  reducers: {
    showSpinner: (state, action) => {
      state.show = true;
      state.text = action.payload;
    },
    hideSpinner: (state) => {
      state.show = false;
      state.text = "";
    },
  },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
