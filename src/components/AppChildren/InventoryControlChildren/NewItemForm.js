import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
//pass in props otherwise newitemform won't have access to props from itemcontrol

//this isn't a class component so we cant use .this
function NewItemForm(props){
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
    name:event.target.name.value,
    price:event.target.price.value,
    availability:event.target.availability.value,
    size:event.target.size.value,
    description:event.target.description.value,
    id: v4()
    });
  }
  return(
  <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='text'
          name='price'
          placeholder='Item Price' />
        <input
          type='text'
          name='availability'
          placeholder='In Stock?' />
        <input
          type='text'
          name='size'
          placeholder='s,m,l,xl' />
        <textarea
          name='description'
          placeholder='Description the item' />
        <button type='submit'>Submit new Item</button>
      </form>
    </React.Fragment>
  );
}
NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;