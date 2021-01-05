//This component displays the order summary by taking in the ingredients as props

import React from "react";
import Auxillary from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";
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
      <p>
        <strong>Total price: {props.price}</strong>
      </p>
      <p>Checkout</p>
      <Button clicked={props.cancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.continue} btnType="Success">
        CONTINUE
      </Button>
    </Auxillary>
  );
};

export default OrderSummary;
