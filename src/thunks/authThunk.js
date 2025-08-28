import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const login = createAsyncThunk('login', async (user) => {
    const response = await api.post('login', user);
    return response.data;
})