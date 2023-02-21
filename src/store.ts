import { configureStore } from "@reduxjs/toolkit";
import uiReduser from './slices/uiSlice'

export const store = configureStore({
    reducer: {
        ui: uiReduser,
    }
})