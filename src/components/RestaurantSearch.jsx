import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {changeSearchTerm} from '../store'

const RestaurantSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>{
    return state.restaurants.searchTerm;
  })

  const handleSearchTermChange = (e) =>{
    dispatch(changeSearchTerm(e.target.value))
  };
  return (
    <div>
       <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="find the name of the restaurant" aria-label="Search"
        value = {searchTerm}
        onChange ={handleSearchTermChange}
        />
        
      </form>
    </div>
   

  )
}

export default RestaurantSearch