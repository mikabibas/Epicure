import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export const selectSearch = (state: { search: SearchState }) =>
  state.search.value;
export default searchSlice.reducer;
