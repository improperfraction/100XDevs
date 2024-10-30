import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState= {
    searchTerm: "",
    cars: []
}

const carSlice= createSlice({
    name: "cars",
    initialState,
    reducers:{
        changeSearchterm(state, action){
            state.searchTerm=action.payload
        },
        addCar(state, action)
        {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action){
            const tobeKept= state.cars.filter((car)=>{
                return car.id!==action.payload
            });
            state.cars= tobeKept
        }

    }
})

export const {addCar, removeCar, changeSearchterm}= carSlice.actions;
export const carsReducer= carSlice.reducer;