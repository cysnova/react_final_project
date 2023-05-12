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
       <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        value = {searchTerm}
        onChange ={handleSearchTermChange}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
   

  )
}

export default RestaurantSearch