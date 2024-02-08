import { configureStore } from "@reduxjs/toolkit";
import { trailerslice } from "./trailerslice";
import { watchlist } from "./watchlistSlice";


export const Store=configureStore({
    reducer:{
        trailer:trailerslice,
        watchlist

        
    }
})