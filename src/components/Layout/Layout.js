// Layout component

import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import LayoutStyles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  closeSideDrawer = () => {
    console.log(this.state.showSideDrawer);
    this.setState({
      showSideDrawer: false,
    });
    console.log(this.state.showSideDrawer);
  };
  render() {
    return (
      <Auxillary>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.closeSideDrawer}
        />
        <main className={LayoutStyles.Content}>{this.props.children}</main>
      </Auxillary>
    );
  }
}

export default Layout;
