import { createSlice } from "@reduxjs/toolkit";

const intialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    inctementByFive: (state) => state + 5,
    reset: () => intialState
  }
});

export const {
  increment,
  decrement,
  inctementByFive,
  reset
} = counterSlice.actions;

export default counterSlice.reducer;
