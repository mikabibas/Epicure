import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { EFetchStatus } from "constants/enum";
import { ICard } from "constants/interfaces";
import { restaurantService } from "services/restaurant.service";
import { RootState } from "store/store";

export const loadRestaurants = createAsyncThunk(
  "restaurants/loadRestaurants",
  async (_, { dispatch, getState }) => {
    try {
      const filterBy = (getState() as RootState).restaurants.filterBy;
      const restaurants = await restaurantService.query(filterBy);

      dispatch(setRestaurantsAction(restaurants));

      return restaurants;
    } catch (error) {
      console.error("Error loading restaurants:", error);
      throw error;
    }
  }
);

export const updateFilterBy = createAsyncThunk(
  "filterBy/updateFilterBy",
  async (
    newFilterBy: "all" | "new" | "most-popular" | "open-now",
    { dispatch }
  ) => {
    dispatch(setFilter(newFilterBy));
    dispatch(loadRestaurants());
  }
);

interface IRestaurantState {
  restaurants: ICard[];
  status: EFetchStatus;
  error: string | null;
  filterBy: "all" | "new" | "most-popular" | "open-now";
}

const initialState: IRestaurantState = {
  restaurants: [],
  status: EFetchStatus.IDLE,
  error: null,
  filterBy: "all",
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
    setFilter: (
      state,
      action: PayloadAction<"all" | "new" | "most-popular" | "open-now">
    ) => {
      state.filterBy = action.payload;
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
export const { setRestaurantsAction, setFilter } = restaurantSlice.actions;
