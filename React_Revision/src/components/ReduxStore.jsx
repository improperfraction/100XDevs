
import {createSlice} from"@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit";


const countState= {
    count: 0
};

const numState= {
    num: 1
}

const countSlice= createSlice({
    name: "counter",
    initialState: countState,
    reducers: {
        increment(state){
            state.count+1
        },
        decerement(state){
            state.count-1
        },
        addit(state, action){
            state.count= state.count + action.payload
        }
    }
})


const NumbSlice= createSlice({
    name: "number",
    initialState: numState,
    reducers: {
        assignNum(state, action){
            state.num= action.payload
        }
    }
})


const store= configureStore({
    reducer:{
        counter: countSlice.reducer,
        number: NumbSlice.reducer
    }
})


export default store;

export const {increment, decerement, addit}= countSlice.actions;
export const {assignNum} = NumbSlice.actions;
