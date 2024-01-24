import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EFetchStatus } from "constants/enum";
import { ChefInfo } from "constants/interfaces";
import data from "assets/restaurants.json";

export const fetchChefs = createAsyncThunk("chefs/fetchChefs", async () => {
  const chefs: ChefInfo[] = data as any as ChefInfo[];

  const chefsWithDetails: ChefInfo[] = chefs.map((chef) => {
    return {
      name: chef.chef.name,
      img: chef.chef.img,
    };
  });

  return chefsWithDetails;
});

interface IChefState {
  chefs: ChefInfo[];
  status: string;
  error: string | null;
}

const initialState: IChefState = {
  chefs: [],
  status: EFetchStatus.IDLE,
  error: null,
};

const chefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {},
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
