import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import restaurantReducer from "./features/restaurantSlice";
import chefReducer from "store/features/chefSlice";
import dishReducer from "store/features/dishSlice";
// import filterByReducer from "store/features/filterBySlice";
import searchReducer from "store/features/searchSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    chefs: chefReducer,
    dishes: dishReducer,
    // filterBy: filterByReducer,
    search: searchReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
