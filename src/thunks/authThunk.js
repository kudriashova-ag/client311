import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";
import { getToken } from "../utils/token";

export const login = createAsyncThunk('login', async (user, { rejectWithValue }) => {
    try {
        const response = await api.post('login', user);
        return response.data;
    }
    catch (err) {
        return rejectWithValue(err.response.data);
    }
})

export const getAuthUser = createAsyncThunk('getAuthUser', async () => {
    const response = await api.post('authUser', null, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
})

