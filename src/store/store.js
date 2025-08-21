import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice';
import articleReducer from '../slices/articleSlice';
// що поширюємо
const store = configureStore({
    reducer: {
        counter: counterReducer, // reducer counter
        articles: articleReducer
    }
});

export default store;