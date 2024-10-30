import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost, resetForm} from "./slices/Formslice";
import { addCar, removeCar, changeSearchterm, carsReducer } from "./slices/Carslice";



const store= configureStore({
    reducer:{
        form: formReducer,
        cars: carsReducer
        
    }
}   
);

export  { store, changeName, changeCost, addCar, removeCar, changeSearchterm, resetForm};