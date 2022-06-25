import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isFetching: false,
    error: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;

      toast.success("Register successfull. Please login to your account.", { position: "top-right" });

      //state.currentUser = action.payload;

      //localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const registerActions = registerSlice.actions;
export default registerSlice.reducer;
