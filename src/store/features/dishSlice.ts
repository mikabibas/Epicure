import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EFetchStatus } from "constants/enum";
import { ICard } from "constants/interfaces";
import dishes from "assets/dishes.json";

export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () => {
  return dishes as ICard[];
});

export interface IDishState {
  dishes: ICard[];
  status: string;
  error: string | null;
}

const initialState: IDishState = {
  dishes: [],
  status: EFetchStatus.IDLE,
  error: null,
};

const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.status = EFetchStatus.LOADING;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.status = EFetchStatus.SUCCEEDED;
        state.dishes = action.payload;
        state.error = null;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.status = EFetchStatus.FAILED;
        state.error = action.error
          ? action.error.message || "Unknown error"
          : "Unknown error";
      });
  },
});

export default dishSlice.reducer;
