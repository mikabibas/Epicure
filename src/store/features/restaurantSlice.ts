import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await fetch("assets/restaurants.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
    status: "idle",
    error: null as string | null, // Initialize error as null with explicit type
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurants = action.payload;
        state.error = null;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error
          ? action.error.message || "Unknown error"
          : "Unknown error";
      });
  },
});

export default restaurantSlice.reducer;
