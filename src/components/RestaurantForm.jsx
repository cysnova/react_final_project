import React,{useState} from 'react';
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {BiRestaurant} from 'react-icons/bi';
import {useDispatch, useSelector} from 'react-redux';
import {openModal, closeModal, changeLocation, changeName, changeRating, editRestaurant, addRestaurant} from '../store';
import '../buttonStyle.css'


const RestaurantForm = ({restaurantToEdit}) => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);



  const { name, location, rating, showModal } = useSelector((state) => {
    return{
      name: state.form.name,
      location: state.form.location,
      rating: state.form.rating,
      showModal: state.modal.showModal
    };
  });
   

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    resetForm();
  };

  const resetForm = () => {
    dispatch(changeName('')); 
    dispatch(changeLocation('')); 
    dispatch(changeRating('')); 
    
  };

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleLocationChange = (e) => {
    dispatch(changeLocation(e.target.value));
  };


  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value) || 0;
    dispatch(changeRating(newRating));
  };
  



  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (restaurantToEdit) {
      dispatch(editRestaurant({ id: restaurantToEdit.id, name, location, rating }));
    } else {
      dispatch(addRestaurant({ name, location, rating }));
    }
  
    setFormSubmitted(true);
    handleCloseModal();
  };
  


  
  return (
    <div>
      {!formSubmitted ?(
        <div  style={{ display: 'flex', justifyContent: 'center' ,alignItems:'center',height:'100vh'}}>
    
          <button onClick={handleOpenModal} className='button-85'>Add Restaurant</button> 
        </div>
        ):(
          <div className="text-start m-4">
            <button onClick={handleOpenModal} className="btn btn-outline-secondary">Add Restaurant</button> 
        </div>
      )}

     <Modal centered isOpen={showModal} toggle={handleCloseModal}>
        <ModalHeader>
          <BiRestaurant fontSize="2em"/>
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
            <Button  className="mt-2 me-2" outline>
              Submit
            </Button>
            {' '}
            <Button className='mt-2' outline onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};                  

export default RestaurantForm;            


  
    
  