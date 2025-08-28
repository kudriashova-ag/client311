import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice';
import articleReducer from '../slices/articleSlice';
import authReducer from '../slices/authSlice';
// що поширюємо
const store = configureStore({
    reducer: {
        counter: counterReducer, // reducer counter
        articles: articleReducer,
        auth: authReducer
    }
});

export default store;