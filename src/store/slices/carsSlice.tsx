import { createSlice, nanoid } from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    }  as any,
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            // 
            state.data.push({
                name: action.payload.name as any,
                cost: action.payload.cost as any,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            const updated  = state.cars.filter((car: any) => {
                return car.id !== action.payload
            })
            state.data = updated
        }
        
    }
})

export const { changeSearchTerm, addCar, removeCar} = carSlice.actions;
export const carsReducer = carSlice.reducer