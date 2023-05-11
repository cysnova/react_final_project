import React,{useState} from 'react'
import {Table} from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'
import { removeRestaurant, editRestaurant, addRestaurant} from '../store'
import {GrEdit} from 'react-icons/gr';
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineStar} from 'react-icons/ai'
import { openModal } from '../store';




const RestaurantList = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.data);

  const handleDelete = (restaurant) => {
    dispatch(removeRestaurant(restaurant.id));
  };

  const handleEdit = (restaurant) => {
    dispatch(
      editRestaurant({
        id: restaurant.id,
        name: restaurant.name,
        location: restaurant.location,
        rating: restaurant.rating,
      })
    );
    dispatch(openModal());
  };

  const renderedRestaurants = restaurants.map((restaurant) => {
    return (
      <tr key={restaurant.id}>
        <td>{restaurant.name}</td>
        <td>{restaurant.location}</td>
        <td>
          {restaurant.rating} <AiOutlineStar />
        </td>
        <td>
          <GrEdit onClick={() => handleEdit(restaurant)} />
          <RiDeleteBin6Line onClick={() => handleDelete(restaurant)} />
        </td>
      </tr>
    );
  });

  return (
    <Table hover size="sm" striped responsive>
      {restaurants.length > 0 && (
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Rating  <AiOutlineStar/></th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
      )}
      <tbody>{renderedRestaurants}</tbody>
    </Table>
  );
};

export default RestaurantList               