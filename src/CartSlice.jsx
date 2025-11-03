// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // list of items in the cart
  },
  reducers: {
    // ✅ Add Item
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // if already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // else add new item with quantity = 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // ✅ Remove Item
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(item => item.name !== itemName);
    },

    // ✅ Update Quantity
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem && amount > 0) {
        existingItem.quantity = amount;
      }
    },
  },
});

// ✅ Export actions and reducer
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
