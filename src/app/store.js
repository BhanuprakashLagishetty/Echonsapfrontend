import { configureStore } from "@reduxjs/toolkit";
import echosnapReducer from "../features/todo/echosnapSlice"

export const store=configureStore({
    reducer: echosnapReducer,
})