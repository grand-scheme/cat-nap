import React from "react";
import ItemDetail from "./ItemChildren/ItemDetail";
import PropTypes from "prop-types";

// const itemArray = [ // placeholder dummy data
//   {
//     name: 'name',
//     price: 'price',
//     availability: 'availability',
//     size: 'size',
//     description: 'description',
//     quantity: 'quantity'
//   },
//   {
//     name: 'name2',
//     price: 'price2',
//     availability: 'availability2',
//     size: 'size2',
//     description: 'description2',
//     quantity: 'quantity2'
//   },
//   {
//     name: 'name3',
//     price: 'price3',
//     availability: 'availability3',
//     size: 'size3',
//     description: 'description3',
//     quantity: 'quantity3'
//   },
// ];

// function Item(props) {
function Item(props) {
  return (
    <>
    <hr />
    {itemArray.map((itemDetail, index) =>
      <ItemDetail
        name={itemDetail.name}
        price={itemDetail.price}
        availability={itemDetail.availability}
        size={itemDetail.size}
        description={itemDetail.description}
        quantity={itemDetail.quantity}
        key={index}
        />
    )}
  </>
  );
}
//this is an array with the properties above
Item.propTypes = {
  itemDetail: PropTypes.array
};

export default Item;