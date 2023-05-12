import {createSlice, nanoid} from '@reduxjs/toolkit'


const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState:{
        searchTerm:'',
        data:[],
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
        addRestaurant(state,action){
            state.data.push({
                name:action.payload.name,
                location:action.payload.location,
                rating:action.payload.rating,
                id:nanoid(),
            });

            console.log(restaurantsSlice.actions.addRestaurant())
        },
        removeRestaurant(state,action){
            const updated = state.data.filter((restaurant)=>{
                return restaurant.id !== action.payload
            });
            state.data = updated;
        },
        editRestaurant: (state, action) => {
            const { id, name, location, rating } = action.payload;
            return {
              ...state,
              data: state.data.map((restaurant) =>
                restaurant.id === id ? { ...restaurant, name, location, rating } : restaurant
              ),
            };
          },
          
          
          
                  
    },
});

export const {changeSearchTerm, addRestaurant, removeRestaurant, editRestaurant} = restaurantsSlice.actions;
export const restaurantsReducer = restaurantsSlice.reducer;