import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    totalQuantity: localStorage.getItem("totalQuantity")
      ? JSON.parse(localStorage.getItem("totalQuantity"))
      : 0,
    totalAmount: localStorage.getItem("totalAmount")
      ? JSON.parse(localStorage.getItem("totalAmount"))
      : 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.findIndex(
        (item) => item._id === newItem._id
      );
      state.totalQuantity++;

      if (existingItem < 0) {
        state.cartItems.push({
          _id: newItem._id,
          title: newItem.title,
          desc: newItem.desc,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        state.cartItems[existingItem].quantity++;
        state.cartItems[existingItem].totalPrice =
          Number(state.cartItems[existingItem].totalPrice) +
          Number(newItem.price);
      }

      toast.info(`${newItem.title} added to your cart.`, {
        position: "bottom-left",
        autoClose: 1500,
      });

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },

    removeItem(state, action) {
      const _id = action.payload;
      const existingItem = state.cartItems.findIndex(
        (item) => item._id === _id
      );
      state.totalQuantity--;

      if (state.cartItems[existingItem].quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item._id !== _id);
      } else {
        state.cartItems[existingItem].quantity--;
        state.cartItems[existingItem].totalPrice =
          Number(state.cartItems[existingItem].totalPrice) -
          Number(state.cartItems[existingItem].price);
      }

      toast.warning(`Package remove from your cart.`, {
        position: "top-right",
        autoClose: 1500,
      });

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },

    deleteItem(state, action) {
      const _id = action.payload;
      const existingItem = state.cartItems.findIndex(
        (item) => item._id === _id
      );

      if (state.cartItems[existingItem].quantity > 0) {
        state.cartItems = state.cartItems.filter((item) => item._id !== _id);
        state.totalQuantity =
          state.totalQuantity - state.cartItems[existingItem].quantity;
      }

      toast.error(`Package deleted from your cart.`, {
        position: "top-right",
        autoClose: 1500,
      });

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
