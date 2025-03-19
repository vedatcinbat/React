import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchIncrementAmount } from "./counterThunk";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIncrementAmount.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
