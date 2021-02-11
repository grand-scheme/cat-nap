import React from "react";
import ItemDetail from "./ItemChildren/ItemDetail";
import PropTypes from "prop-types";

// function Item(props) {
function Item(props) {
  return (
    <>    
    {props.ItemList.map((itemDetail, index) =>
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