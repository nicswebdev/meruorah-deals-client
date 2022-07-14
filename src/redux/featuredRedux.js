import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFeatured } from "./apiCalls";

const initialState = {
    featuredDeals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Get Highlight
export const getFeaturedDeals = createAsyncThunk(
    "deals/getFeaturedDeals",
    async (_, thunkAPI) => {
        try {
            //const token = thunkAPI.getState().auth.user.accessToken;
            return await getFeatured();
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

const featuredSlice = createSlice({
    name: "featured",
    initialState,
    reducers: {
        resetFeatured: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFeaturedDeals.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFeaturedDeals.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.featuredDeals = action.payload;
            })
            .addCase(getFeaturedDeals.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { resetFeatured } = featuredSlice.actions;
export default featuredSlice.reducer;
