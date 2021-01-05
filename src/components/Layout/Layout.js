// Layout component

import React from "react";
import Auxillary from "../../hoc/Auxillary";
import LayoutStyles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Auxillary>
    <Toolbar />
    <main className={LayoutStyles.Content}>{props.children}</main>
  </Auxillary>
);

export default Layout;
