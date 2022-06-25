import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : [],
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;

      state.currentUser = action.payload;

      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
        state.currentUser = [];

        localStorage.removeItem("currentUser");

        toast.error("You're logged out.", { position: "top-right" });
    }
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
