import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { EFetchStatus } from "constants/enum";
import { ICard } from "constants/interfaces";
import { API_URL } from "constants/variables";

export const loadRestaurants = createAsyncThunk(
  "restaurants/loadRestaurants",
  async (_, { dispatch }) => {
    try {
      const response = await fetch(`${API_URL}/restaurants`);

      if (!response.ok) {
        throw new Error(
          `Error loading restaurants. Status: ${response.status}`
        );
      }

      const data = await response.json();

      const restaurants: ICard[] = Array.isArray(data.restaurants)
        ? data.restaurants
        : [];

      dispatch(setRestaurantsAction(restaurants));

      return restaurants;
    } catch (error) {
      console.error("Error loading restaurants:", error);
      throw error;
    }
  }
);

interface IRestaurantState {
  restaurants: ICard[];
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
  reducers: {
    setRestaurantsAction: (state, action: PayloadAction<ICard[]>) => {
      state.status = EFetchStatus.SUCCEEDED;
      state.restaurants = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRestaurants.pending, (state) => {
        state.status = EFetchStatus.LOADING;
      })
      .addCase(loadRestaurants.fulfilled, (state, action) => {
        state.status = EFetchStatus.SUCCEEDED;
        state.restaurants = action.payload;
        state.error = null;
      })
      .addCase(loadRestaurants.rejected, (state, action) => {
        state.status = EFetchStatus.FAILED;
        state.error = action.error
          ? action.error.message || "Unknown error"
          : "Unknown error";
      });
  },
});

export default restaurantSlice.reducer;
export const { setRestaurantsAction } = restaurantSlice.actions;
