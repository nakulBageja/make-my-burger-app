//This component acts as UI hoc. With some css and logic applied

import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxillary from "../../../hoc/Auxillary";
const Modal = (props) => {
  return (
    <Auxillary>
      <Backdrop show={props.show} clicked={props.clicked} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxillary>
  );
};

export default Modal;
