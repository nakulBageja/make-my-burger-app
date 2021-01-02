// Layout component

import React from "react";
import Auxillary from "../../hoc/Auxillary";
import LayoutStyles from "./Layout.module.css";
const Layout = (props) => (
  <Auxillary>
    <div>Toolbar, side bar, back drop</div>
    <main className={LayoutStyles.Content}>{props.children}</main>
  </Auxillary>
);

export default Layout;
