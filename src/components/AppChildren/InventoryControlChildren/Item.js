import React from "react";
import ItemDetails from "./ItemChildren/ItemDetail";
import PropTypes from "prop-types";


function Item(props) {
  return (
    <>
    <hr />
    {props.item.map((itemdetails, index) =>
      < ItemDetails
        name={itemdetails.name}
        price={itemdetails.price}
        availability={itemdetails.availability}
        size={itemdetails.size}
        description={itemdetails.description}
        quantity={itemdetails.quantity}
        key={index}
        />
    )
  }
    </>
  )
}