import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import restaurants from "assets/restaurants.json";
import { IRestaurant } from "constants/interfaces";
import { EFetchStatus } from "constants/enum";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    // const response = await fetch("assets/restaurants.json", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // });
    return restaurants as IRestaurant[];
  }
);

interface IRestaurantState {
  restaurants: IRestaurant[];
  status: EFetchStatus;
  error: string | null;
}

const initialState: IRestaurantState = {
  restaurants: [],
  status: EFetchStatus.IDLE,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = EFetchStatus.LOADING;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = EFetchStatus.SUCCEEDED;
        state.restaurants = action.payload;
        state.error = null;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = EFetchStatus.FAILED;
        state.error = action.error
          ? action.error.message || "Unknown error"
          : "Unknown error";
      });
  },
});

export default restaurantSlice.reducer;
