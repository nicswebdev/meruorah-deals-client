import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDeals } from "./apiCalls";

const initialState = {
    currentDeals: [],
    allDeals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Get Best Deals
export const getBestDeals = createAsyncThunk(
    "deals/getBestDeals",
    async (_, thunkAPI) => {
        try {
            //const token = thunkAPI.getState().auth.user.accessToken;
            return await getDeals();
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

// Get All Deals
export const getAllDeals = createAsyncThunk(
    "deals/getAllDeals",
    async (_, thunkAPI) => {
        try {
            //const token = thunkAPI.getState().auth.user.accessToken;
            return await getDeals();
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

const dealsSlice = createSlice({
    name: "deals",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBestDeals.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBestDeals.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentDeals = action.payload;
            })
            .addCase(getBestDeals.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllDeals.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllDeals.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.allDeals = action.payload;
            })
            .addCase(getAllDeals.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = dealsSlice.actions;
export default dealsSlice.reducer;
