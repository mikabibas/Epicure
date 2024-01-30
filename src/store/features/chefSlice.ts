import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EFetchStatus } from "constants/enum";
import { ChefInfo } from "constants/interfaces";
import axios from "axios";
import { API_URL } from "constants/variables";

export const fetchChefs = createAsyncThunk("chefs/fetchChefs", async () => {
  try {
    const response = await axios.get(`${API_URL}/chefs`);

    const chefs: ChefInfo[] = response.data.chefs;
    console.log(chefs);

    const chefsWithDetails: ChefInfo[] = chefs.map((chef) => ({
      _id: chef._id,
      name: chef.name,
      image: chef.image,
      restaurants: chef.restaurants,
      info: chef.info,
    }));

    return chefsWithDetails;
  } catch (error) {
    throw error;
  }
});

export interface IChefState {
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
