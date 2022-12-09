import { configureStore } from "@reduxjs/toolkit";
import cardReduser from './slices/cardSlice'

export const store = configureStore({
    reducer: {
        card: cardReduser,
    }
})