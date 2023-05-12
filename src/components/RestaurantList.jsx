import React,{useState} from 'react'
import {Table} from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'
import { removeRestaurant, editRestaurant} from '../store'
import {GrEdit} from 'react-icons/gr';
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineStar} from 'react-icons/ai'
import { openModal } from '../store';


const RestaurantList = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.data);
  const restaurantToEdit = useSelector((state) => state.restaurants.restaurantToEdit);

  const handleDelete = (restaurant) => {
    dispatch(removeRestaurant(restaurant.id));
  };

  const handleEdit = (restaurant) => {
    dispatch(editRestaurant(restaurant));
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
      {restaurantToEdit && (
        <Modal centered isOpen={true}>
          <ModalHeader>
            <BiRestaurant fontSize="2em" />
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name of the Restaurant</Label>
                <Input
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Add Your favourite Restaurant"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input
                  placeholder="Location of the Restaurant"
                  type="text"
                  value={location}
                  onChange={handleLocationChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="rating">Rating</Label>
                <Input type="select" value={rating || ""} onChange={handleRatingChange}>
                  <option value=" ">Choose rating</option>
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </Input>
              </FormGroup>
              <Button className="mt-2 me-2" outline>
                Submit
              </Button>{" "}
              <Button className="mt-2" outline onClick={handleCloseModal}>
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      )}
    </Table>
  );
};

export default RestaurantList               