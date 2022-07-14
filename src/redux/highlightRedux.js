import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHighlight } from "./apiCalls";

const initialState = {
    highlightDeals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Get Highlight
export const getHighlightDeals = createAsyncThunk(
    "deals/getHighlightDeals",
    async (_, thunkAPI) => {
        try {
            //const token = thunkAPI.getState().auth.user.accessToken;
            return await getHighlight();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const highlightSlice = createSlice({
    name: "highlight",
    initialState,
    reducers: {
        resetHighlight: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHighlightDeals.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getHighlightDeals.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.highlightDeals = action.payload;
            })
            .addCase(getHighlightDeals.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { resetHighlight } = highlightSlice.actions;
export default highlightSlice.reducer;
