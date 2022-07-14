import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNavCategories } from "./apiCalls";

const initialState = {
    navCategories: [],
    isErrorNavCategories: false,
    isSuccessNavCategories: false,
    isLoadingNavCategories: false,
    messageNavCategories: "",
};

// Get Highlight
export const getNavCategoriesData = createAsyncThunk(
    "categories/getNavCategoriesData",
    async (_, thunkAPI) => {
        try {
            //const token = thunkAPI.getState().auth.user.accessToken;
            return await getNavCategories();
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

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        resetNavCategory: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNavCategoriesData.pending, (state) => {
                state.isLoadingNavCategories = true;
            })
            .addCase(getNavCategoriesData.fulfilled, (state, action) => {
                state.isLoadingNavCategories = false;
                state.isSuccessNavCategories = true;
                state.navCategories = action.payload;
            })
            .addCase(getNavCategoriesData.rejected, (state, action) => {
                state.isLoadingNavCategories = false;
                state.isErrorNavCategories = true;
                state.messageNavCategories = action.payload;
            });
    },
});

export const { resetNavCategory } = categorySlice.actions;
export default categorySlice.reducer;
