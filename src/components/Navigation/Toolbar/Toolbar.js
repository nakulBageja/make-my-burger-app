import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./Toolbar.module.css";
import Drawer from "../SideDrawer/Drawer/Drawer";
const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <Drawer toggle={props.toggle} />
      <Logo />
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
