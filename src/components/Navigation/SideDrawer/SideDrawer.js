//This component will be displayed only in mobile devices

import React from "react";
import styles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import Navigation from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Auxillary from "../../../hoc/Auxillary";
const SideDrawer = (props) => {
  let attachedStyles = [styles.SideDrawer, styles.Close];

  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }
  return (
    <Auxillary>
      <BackDrop show={props.open} clicked={props.close} />
      <div className={attachedStyles.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
    </Auxillary>
  );
};

export default SideDrawer;
