import React from "react";
import styles from "./BurgerControlsPanel.module.css";
import { BurgerControl } from "../BurgerControl/BurgerControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export const BurgerControlsPanel = (props) => {
  return (
    <div className={styles.BuildControls}>
      {controls.map((ctrl) => (
        <BurgerControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};
