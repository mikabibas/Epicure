import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import restaurantReducer from "./features/restaurantSlice";
import chefReducer from "store/features/chefSlice";
import dishReducer from "store/features/dishSlice";
import searchReducer from "store/features/searchSlice";
import cartReducer from "store/features/cartSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    chefs: chefReducer,
    dishes: dishReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
