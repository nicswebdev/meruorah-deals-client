import { createSlice } from "@reduxjs/toolkit";

const dealsSlice = createSlice({
  name: "deals",
  initialState: {
    currentDeals: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.isFetching = true;
    },
    fetchSuccess: (state, action) => {
      state.isFetching = false;

      state.currentDeals = action.payload;
    },
    fetchFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const dealsActions = dealsSlice.actions;
export default dealsSlice.reducer;
