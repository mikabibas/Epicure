import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { EFetchStatus } from "constants/enum";
import { ICard } from "constants/interfaces";
import { restaurantService } from "services/restaurant.service";
import { RootState } from "store/store";

export const loadMoreRestaurants = createAsyncThunk(
  "restaurants/loadMoreRestaurants",
  async (_, { getState }) => {
    try {
      const state = getState() as RootState;
      const filterBy = state.restaurants.filterBy;
      const offset = state.restaurants.restaurants.length;
      const moreRestaurants = await restaurantService.query(
        filterBy,
        offset,
        12
      );
      return moreRestaurants;
    } catch (error) {
      console.error("Error loading more restaurants:", error);
      throw error;
    }
  }
);

export const fetchRestaurantById = createAsyncThunk(
  "restaurants/fetchRestaurantById",
  async (restaurantId: string) => {
    try {
      const restaurant = await restaurantService.getRestaurantById(
        restaurantId
      );
      return restaurant;
    } catch (error) {
      console.error("Error loading restaurant:", error);
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
  }
);

interface IRestaurantState {
  singleRestaurant: ICard | null;
  restaurants: ICard[];
  status: EFetchStatus;
  error: string | null;
  filterBy: "all" | "new" | "most-popular" | "open-now";
}

const initialState: IRestaurantState = {
  singleRestaurant: null,
  restaurants: [],
  status: EFetchStatus.IDLE,
  error: null,
  filterBy: "all",
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<"all" | "new" | "most-popular" | "open-now">
    ) => {
      state.filterBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoreRestaurants.pending, (state) => {
        state.status = EFetchStatus.LOADING;
      })
      .addCase(loadMoreRestaurants.fulfilled, (state, action) => {
        state.status = EFetchStatus.SUCCEEDED;
        state.restaurants = [...state.restaurants, ...action.payload];
        state.error = null;
      })
      .addCase(loadMoreRestaurants.rejected, (state, action) => {
        state.status = EFetchStatus.FAILED;
        state.error = action.error
          ? action.error.message || "Unknown error"
          : "Unknown error";
      })
      .addCase(fetchRestaurantById.pending, (state) => {
        state.status = EFetchStatus.LOADING;
      })
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        state.status = EFetchStatus.SUCCEEDED;
        state.singleRestaurant = action.payload;
        state.error = null;
      })
      .addCase(fetchRestaurantById.rejected, (state, action) => {
        state.status = EFetchStatus.FAILED;
        state.error = action.error
          ? action.error.message || "Unknown error"
          : "Unknown error";
      });
  },
});

export default restaurantSlice.reducer;
export const { setFilter } = restaurantSlice.actions;
