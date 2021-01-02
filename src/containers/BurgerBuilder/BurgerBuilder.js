// This container controls the state of the burger ingredients and UI

import React, { Component } from "react";
import { Burger } from "../../components/Burger/Burger";
import { BurgerControlsPanel } from "../../components/BurgerController/BurgerControlsPanel/BurgerControlsPanel";
import Auxillary from "../../hoc/Auxillary";

const PRICE = {
  meat: 200,
  cheese: 50,
  salad: 20,
  bacon: 500,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0,
    },
    totalPrice: 0,
  };

  //Function to increase count of ingredients and price
  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount; //updated count of that ingredient

    const currentTotal = this.state.totalPrice;
    const updatedTotal = currentTotal + PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotal,
    });
  };
  //Function to remove count of ingredients and price
  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    //if there is not ingredient of this type then return
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount; //updated count of that ingredient

    const currentTotal = this.state.totalPrice;
    const updatedTotal = currentTotal - PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotal,
    });
  };
  render() {
    const disabled = { ...this.state.ingredients }; //copying the state of ingredients object
    //here we are checking if the quantity of any ingredient is zero.
    //If yes then we will disable the LESS button of the panel
    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControlsPanel
          addIngredients={this.addIngredientsHandler}
          removeIngredients={this.removeIngredientsHandler}
          disabled={disabled}
        />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
