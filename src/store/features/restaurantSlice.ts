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
    newFilterBy: "All" | "New" | "Most-Popular" | "Open-Now",
    { dispatch }
  ) => {
    dispatch(resetRestaurants());
    dispatch(setFilter(newFilterBy));
    dispatch(loadMoreRestaurants());
  }
);

interface IRestaurantState {
  singleRestaurant: ICard | null;
  restaurants: ICard[];
  status: EFetchStatus;
  error: string | null;
  filterBy: "All" | "New" | "Most-Popular" | "Open-Now";
}

const initialState: IRestaurantState = {
  singleRestaurant: null,
  restaurants: [],
  status: EFetchStatus.IDLE,
  error: null,
  filterBy: "All",
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<"All" | "New" | "Most-Popular" | "Open-Now">
    ) => {
      state.filterBy = action.payload;
    },
    setRestaurants: (state, action: PayloadAction<ICard[] | []>) => {
      state.restaurants = [...state.restaurants, ...action.payload];
    },
    resetRestaurants: (state) => {
      state.restaurants = [];
    },
  },
  extraReducers: (builder) => {
    let filterActionDispatched = false;

    builder
      .addCase(updateFilterBy.fulfilled, (state) => {
        filterActionDispatched = true;
      })
      .addCase(loadMoreRestaurants.pending, (state) => {
        state.status = EFetchStatus.LOADING;
      })
      .addCase(loadMoreRestaurants.fulfilled, (state, action) => {
        state.status = EFetchStatus.SUCCEEDED;

        if (filterActionDispatched) {
          const newRestaurants = action.payload.slice(0, 15);
          state.restaurants = newRestaurants;
          filterActionDispatched = false;
        } else {
          state.restaurants = [...state.restaurants, ...action.payload];
        }
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
      })
      .addCase(resetRestaurants, (state) => {
        state.restaurants = [];
      });
  },
});

export default restaurantSlice.reducer;
export const { setFilter, setRestaurants, resetRestaurants } =
  restaurantSlice.actions;
