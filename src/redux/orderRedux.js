import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isFetching: false,
    error: false,
    orderStatus: false
  },
  reducers: {
    orderStart: (state) => {
      state.isFetching = true;
      state.orderStatus = false;
    },
    orderSuccess: (state, action) => {
      state.isFetching = false;
      state.orderStatus = true;

      toast.success("Order successfully created.", {
        position: "top-right",
      });

      //state.currentUser = action.payload;
    },
    orderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
