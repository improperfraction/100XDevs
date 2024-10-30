
import { createAction, createSlice } from "@reduxjs/toolkit";
import { addCar } from "./Carslice";

const initialState = {
    name: "",
    cost: 0
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        },
    
        resetForm(state) {
            state.name = '';  // Reset name
            state.cost = 0;    // Reset cost
        },
    },
    extraReducers(builder){
        builder.addCase(addCar, (state, action)=>{
            state.name = '';  // Reset name
            state.cost = 0;    // Reset cost//
        })
    }
})

export const { changeCost, changeName, resetForm } = formSlice.actions;
export const formReducer = formSlice.reducer