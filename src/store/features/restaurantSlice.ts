import {
  createSlice,
  createAsyncThunk,
  createAction,
  Dispatch,
} from "@reduxjs/toolkit";
import { ICard } from "constants/interfaces";
import { EFetchStatus } from "constants/enum";
import { restaurantService } from "services/restaurant.service";

export const loadRestaurants = createAsyncThunk(
  "restaurants/loadRestaurants",
  async (
    _,
    { dispatch, getState }: { dispatch: Dispatch; getState: () => any }
  ) => {
    try {
      const restaurants = await restaurantService.query(getState().filterBy);
      dispatch(setRestaurants(restaurants as ICard[]));
      return restaurants;
    } catch (error) {
      console.error("Error loading restaurants:", error);
      throw error;
    }
  }
);

export const setRestaurants = createAction<ICard[]>(
  "restaurants/updateRestaurants"
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
    setRestaurants: (state, action) => {
      return {
        ...state,
        restaurants: [...(action.payload as ICard[])],
        error: null,
        status: EFetchStatus.IDLE,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRestaurants.pending, (state: IRestaurantState) => {
        state.status = EFetchStatus.LOADING;
      })
      .addCase(loadRestaurants.fulfilled, (state: IRestaurantState, action) => {
        state.status = EFetchStatus.SUCCEEDED;
        state.restaurants = [...(action.payload as ICard[])];
        state.error = null;
      })
      .addCase(loadRestaurants.rejected, (state: IRestaurantState, action) => {
        state.status = EFetchStatus.FAILED;
        state.error = action.error
          ? action.error.message || "Unknown error"
          : "Unknown error";
      });
  },
});

export default restaurantSlice.reducer;
