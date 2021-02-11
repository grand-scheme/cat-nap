import React from "react";
import { v4 } from 'uuid';

function NewItemForm(){
  return (
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

function NewItemForm(){
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.price.value);
    console.log(event.target.availability.value);
    console.log(event.target.size.value);
    console.log(event.target.description.value);
  }
}

export default NewItemForm;