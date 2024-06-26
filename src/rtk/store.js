import { configureStore } from "@reduxjs/toolkit";
import { watchlist } from "./watchlistSlice";


export const Store=configureStore({
    reducer:{
        watchlist

        
    }
})
