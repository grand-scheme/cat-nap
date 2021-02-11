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

export default NewItemForm;