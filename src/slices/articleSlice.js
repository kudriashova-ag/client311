import { createSlice } from "@reduxjs/toolkit";
import { getArticles } from "../thunks/articleThunks";

const initialValues = {
    data: [],
    status: 'idle', // idle, loading, success, failed
    error: null
}

const articleSlice = createSlice({
    name: 'articles',
    initialState: initialValues,
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getArticles.fulfilled, (state, action) => { 
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(getArticles.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;  // !!!!!
            })
    }
});

export default articleSlice.reducer;