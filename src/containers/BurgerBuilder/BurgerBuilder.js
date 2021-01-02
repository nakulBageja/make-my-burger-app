// This container controls the state of the burger ingredients and GUI

import React, { Component } from "react";
import { Burger } from "../../components/Burger/Burger";
import { BurgerControlsPanel } from "../../components/BurgerController/BurgerControlsPanel/BurgerControlsPanel";
import Auxillary from "../../hoc/Auxillary";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 2,
    },
  };
  render() {
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControlsPanel />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
