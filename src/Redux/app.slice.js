import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}



let appSlice=createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state,action)=>{

            state.value=state.value+action.payload
            
        },
        decrement:(state,action)=>{
            state.value=state.value-action.payload
            
        },
        reset:(state,action)=>{
            
            state.value=action.payload
        }
    }
})

export const {increment,decrement,reset}=appSlice.actions

export default appSlice.reducer