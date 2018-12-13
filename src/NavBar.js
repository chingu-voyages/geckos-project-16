import React, { Component, Fragment } from "react";
import { Menu, Sidebar, Responsive } from "semantic-ui-react";

// defaultly exported
const NavBar = () => (
  <Fragment>
    <Responsive {...Responsive.onlyMobile}>
      <NavBarMobile />
    </Responsive>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <NavBarDesktop />
    </Responsive>
  </Fragment>
);

// used for desktop screens
const NavBarDesktop = () => (
  <Menu fixed="top">
    <MenuItems items={leftItems} />
    <MenuItems items={rightItems} position="right" />
  </Menu>
);

// used for tablet and mobile screens
class NavBarMobile extends Component {
  state = {
    visible: false,
  };

  handlePusher = () => {
    if (!this.state.visible) return;
    this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <Sidebar.Pushable>
        <Sidebar as={Menu} animation="overlay" icon="labeled" vertical visible={visible}>
          <MenuItems items={leftItems} />
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={this.handlePusher}
          style={{ minHeight: "100vh" }}
        >
          <Menu fixed="top">
            <Menu.Item onClick={this.handleToggle} icon="sidebar" />
            <MenuItems items={rightItems} position="right" />
          </Menu>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

// maps over items array props and returns menu items
const MenuItems = ({ items, position }) => (
  <Menu.Menu position={position}>
    {items.map(item => (
      <Menu.Item {...item} />
    ))}
  </Menu.Menu>
);

// Used to create menu items
const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "View Listings", key: "listings" },
  { as: "a", content: "Create Listing", key: "createListing" },
  { as: "a", content: "Listing Policy", key: "listingPolicy" },
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" },
];

export default NavBar;
