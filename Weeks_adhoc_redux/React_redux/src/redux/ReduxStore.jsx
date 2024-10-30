import { configureStore, createSlice, createAction } from "@reduxjs/toolkit"

export const resetNum= createAction("app/resetnum");

//initial state of our app
const countState = {
    count: 0
}

const numState={
    num: 0
}

//creating slice of given state with reducers and actions
const CounterSlice = createSlice({
    name: "counter",
    initialState: countState,
    reducers: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        },
        addit(state, action) {
            state.count += action.payload
        }
    }
});

const NumberSlice = createSlice({
    name: "number",
    initialState: numState,
    reducers: {
        assignNum(state, action) {
            state.num= action.payload
        },
    },
    extraReducers(builder){
        builder.addCase('app/resetnum', (state, action)=>{
            state.num=0
    
        })
    }
});

//Store creation and configuration
const store = configureStore({
    reducer: {
        //our app's state will have state by the name of following keys i.e. counter
        counter: CounterSlice.reducer,
        number: NumberSlice.reducer
    }
})

export default store;
export const { increment, decrement, addit } = CounterSlice.actions
export const {assignNum} = NumberSlice.actions
