import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {

  return(
    <>
      <h1>Item Detail Placeholder</h1>
      {props.name}  <br />
      {props.price} <br />
      {props.availability} <br />
      {props.size} <br />
      {props.description} <br />
      {props.quantity} <br />
    </>
  );
}

ItemDetail.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  availability: PropTypes.bool,
  size: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number
};

export default ItemDetail;