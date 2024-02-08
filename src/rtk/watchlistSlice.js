import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
const watchlistSlice=createSlice({
    name:"watchlist",
    initialState,
    reducers:{
        addMovie:(state,action)=>{
            const repeatedMovie=state.find((element)=>{
                return element.id===action.payload.id
            })
            if(!repeatedMovie){
                state.unshift(action.payload)
            }
            
        },
        deleteMovie:(state,action)=>{
            return state.filter((element)=>(element.id!==action.payload.id))
            
        }
    }
})
export const {addMovie,deleteMovie}=watchlistSlice.actions
export const watchlist=watchlistSlice.reducer