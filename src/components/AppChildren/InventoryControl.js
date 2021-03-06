import React from 'react';
import Item from './InventoryControlChildren/Item';
import NewitemForm from './InventoryControlChildren/NewItemForm';

class InventoryControl extends React.Component {
//this is a constructor to the class component and the only place to define default state
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, //this is the derfault state of our application
    };
    this.handleClick = this.handleClick.bind(this);
  }
//calling a function in a state component
  handleClick() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  //this is our button to add a new item to be sold
  //This is our conditional rendering (what should be rendered) and it is our local state
  render(){
    let currentlyVisibleState = null;
    let AddItemButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <newItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
    } else {
      currentlyVisibleState = <Item />;
      //click handler to JSX
      AddItemButton = <button onClick={this.handleClick}>Add item to List</button>;
    }

    
    return (
      <>
      {currentlyVisibleState}
      {AddItemButton}
      // <h1>Inventory placeholder</h1>
      // <Item />
      </>
    );
  }
}

export default InventoryControl;