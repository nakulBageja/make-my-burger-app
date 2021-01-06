import React from "react";
import styles from "./Drawer.module.css";
const Drawer = (props) => {
  return (
    <div className={styles.Drawer} onClick={props.toggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default Drawer;
