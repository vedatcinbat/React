import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchIncrementAmount = createAsyncThunk<
  number,
  void,
  { state: RootState }
>("counter/fetchIncrementAmount", async (_, thunkAPI) => {
  const response = await new Promise<number>((resolve) =>
    setTimeout(() => resolve(10), 1000)
  );
  return response;
});
