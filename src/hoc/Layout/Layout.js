// Layout component

import React, { Component } from "react";
import Auxillary from "../Auxillary/Auxillary";
import LayoutStyles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  closeSideDrawer = () => {
    this.setState({
      showSideDrawer: false,
    });
  };
  openSideDrawer = () => {
    this.setState({
      showSideDrawer: true,
    });
  };
  render() {
    return (
      <Auxillary>
        <Toolbar toggle={this.openSideDrawer} />
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
