import { createSlice } from "@reduxjs/toolkit";
const initialstate={
    url:"",
    opened:false
}
let trailerSlice=createSlice({
    name:"trailer",
    initialState:initialstate,
    reducers:{
        getUrl:(state,action)=>{
            state.url=action.payload
        },
        openTrailer:(state,action)=>{
            state.opened=true
        },
        reset:(state,action)=>{
            state.opened=false
            state.url=""
        }
    }

    
})

export const {getUrl,openTrailer,reset}=trailerSlice.actions
export const trailerslice=trailerSlice.reducer