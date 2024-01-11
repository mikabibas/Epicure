import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import restaurantReducer from "./features/restaurantSlice";
import chefReducer from "store/features/chefSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    chefs: chefReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
