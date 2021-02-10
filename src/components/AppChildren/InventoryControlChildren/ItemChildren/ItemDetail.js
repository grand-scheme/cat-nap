import React from "react";
import PropTypes from "prop-types";

function ItemDetails(props) {

  return(
    <>
    </>
  );
}

ItemDetails.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  availability: PropTypes.boolean,
  size: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number
};

export default ItemDetails;