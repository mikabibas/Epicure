import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "constants/interfaces";

interface CartItem {
  dish: Dish;
  quantity: number;
  selectedSide: string | null;
  changes: string[];
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.dish.dish_id === action.payload.dish.dish_id
      );

      if (existingCartItemIndex !== -1) {
        state.items[existingCartItemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.dish.dish_id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
