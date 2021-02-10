import React from 'react';
import Item from './InventoryControlChildren/Item';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
//       formVisibleOnPage: false,
//       masterItemList: []
    };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       formVisibleOnPage: !prevState.formVisibleOnPage
//     }));
  }


  render(){
  // function InventoryControl(){ // placeholder
    return (
      <>
      <h1>Inventory placeholder</h1>
      <Item />
      </>
    );
  }
}

export default InventoryControl;