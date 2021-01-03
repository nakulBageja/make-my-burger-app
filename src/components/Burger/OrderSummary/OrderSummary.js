//This component displays the order summary by taking in the ingredients as props

import React from "react";
import Auxillary from "../../../hoc/Auxillary";
const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxillary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredients}</ul>
      <p>Checkout</p>
    </Auxillary>
  );
};

export default OrderSummary;
