import { configureStore } from "@reduxjs/toolkit";
import { addCar, carsReducer, changeSearchTerm, removeCar } from "./carsSlice";
import { changeCost, changeName, formReducer } from "./formSlice";

const store  = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export  { store, changeName, changeCost,addCar, removeCar,changeSearchTerm, }