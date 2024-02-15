import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { EFetchStatus } from "constants/enum";
import { IChef } from "constants/interfaces";
import { RootState } from "store/store";
import { chefService } from "services/chef.service";

export const fetchChefs = createAsyncThunk(
  "chefs/fetchChefs",
  async (_, { getState }) => {
    try {
      const state = getState() as RootState;
      const filterBy = state.chefs.filterBy;
      const getChefs = await chefService.fetchAllChefs(filterBy);
      return getChefs;
    } catch (error) {
      console.error("Error loading more restaurants:", error);
      throw error;
    }
  }
);

export const updateFilterByChef = createAsyncThunk(
  "filterBy/updateFilterByChef",
  async (
    newFilterBy: "all" | "new" | "most-popular" | "open-now",
    { dispatch }
  ) => {
    dispatch(setFilter(newFilterBy));
    dispatch(fetchChefs());
    dispatch(resetFilter());
  }
);

export interface IChefState {
  chefs: IChef[];
  status: string;
  error: string | null;
  filterBy: "all" | "new" | "most-popular" | "open-now";
}

const initialState: IChefState = {
  chefs: [],
  status: EFetchStatus.IDLE,
  error: null,
  filterBy: "all",
};

const chefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<"all" | "new" | "most-popular" | "open-now">
    ) => {
      state.filterBy = action.payload;
    },
    resetFilter: (state) => {
      state.filterBy = "all";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChefs.pending, (state) => {
        state.status = EFetchStatus.LOADING;
      })
      .addCase(fetchChefs.fulfilled, (state, action) => {
        state.status = EFetchStatus.SUCCEEDED;
        state.chefs = action.payload;
        state.error = null;
      })
      .addCase(fetchChefs.rejected, (state, action) => {
        state.status = EFetchStatus.FAILED;
        state.error = action.error
          ? action.error.message || "Unknown error"
          : "Unknown error";
      });
  },
});

export default chefSlice.reducer;
export const { setFilter, resetFilter } = chefSlice.actions;
