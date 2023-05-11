import {createSlice} from '@reduxjs/toolkit'


const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        location:'',
        rating: 5,
    },
    reducers:{
        changeName(state,action){
            state.name = action.payload;
        },
        changeLocation(state,action){
            state.location = action.payload;
        },
        changeRating(state,action){
            state.rating = action.payload;
        },
    }
 });

 export const {changeName, changeLocation, changeRating} = formSlice.actions;
 export const formReducer = formSlice.reducer;