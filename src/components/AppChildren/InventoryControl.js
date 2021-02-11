import React from 'react';
import Item from './InventoryControlChildren/Item';

class InventoryControl extends React.Component {
//this is a constructor to the class component and the only place to define default state
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

  //this is our button to add a new item to be sold
  render(){
    let currentlyVisibleState = null;
    let AddItemButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <newItemForm />;
    } else {
      currentlyVisibleState = <ItemList />;
      addItemButton = <button onClick={this.handleClick}>Add item to List</button>;
    }

    
    return (
      <>
      {currentlyVisibleState}
      {addItemButton}
      // <h1>Inventory placeholder</h1>
      // <Item />
      </>
    );
  }
}

export default InventoryControl;