//A reusable component containing the logo

import React from "react";
import styles from "./Logo.module.css";
import logoImg from "../../assets/images/burger-logo.png";
const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={logoImg} alt="myBurger"></img>
    </div>
  );
};

export default Logo;
