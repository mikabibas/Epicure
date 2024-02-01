import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { loadRestaurants } from "./restaurantSlice";
// import { IFilterBy } from "services/restaurant.service";

// export const updateFilterBy = createAsyncThunk(
//   "filterBy/updateFilterBy",
//   async (newFilterBy: String, { dispatch }) => {
//     dispatch(setFilterBy(newFilterBy));
//     console.log(newFilterBy);
//     dispatch(loadRestaurants());
//   }
// );

// const initialState: IFilterBy = {
//   isNew: false,
//   isPopular: false,
//   isOpen: false,
// };

// const filterBySlice = createSlice({
//   name: "filterBy",
//   initialState,
//   reducers: {
//     setFilterBy: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//   },
// });

// export const { setFilterBy } = filterBySlice.actions;
// export default filterBySlice.reducer;
