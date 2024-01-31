import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EFetchStatus } from "constants/enum";
import { ICard } from "constants/interfaces";
import axios from "axios";
import { API_URL } from "constants/variables";

export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () => {
  try {
    const response = await axios.get(`${API_URL}/dishes`);
    return response.data.dishes as ICard[];
  } catch (error) {
    throw error;
  }
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
