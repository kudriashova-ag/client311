import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//  http://localhost:5000   !!!!!!
export const getArticles = createAsyncThunk('articles/getArticles', async () => {
    const response = await axios.get('http://localhost:5000/articles');
    return response.data;
});

export const getArticle = createAsyncThunk('articles/getArticle', async (id) => {
    const response = await axios.get(`http://localhost:5000/articles/${id}`);
    return response.data;
});

export const createArticle = createAsyncThunk('articles/createArticle', async (article) => {
    const response = await axios.post('http://localhost:5000/articles', article);
    return response.data;
});