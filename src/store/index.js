import {configureStore} from '@reduxjs/toolkit'
import { modalReducer, openModal, closeModal } from './slice/modalSlice';
import {restaurantsReducer, addRestaurant, removeRestaurant, editRestaurant, changeSearchTerm } from './slice/restaurantsSlice'
import {formReducer, changeName, changeLocation, changeRating} from './slice/formSlice'


const rootReducer = {
  form: formReducer,
  modal: modalReducer,
  restaurants: restaurantsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});



export {
    store, 
    openModal, 
    closeModal,
    addRestaurant,
    removeRestaurant,
    editRestaurant,
    changeSearchTerm,
    changeName,
    changeLocation,
    changeRating
};