import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Icon, Menu, Sidebar, Responsive } from "semantic-ui-react";

const MenuItems = ({ items, position }) => (
  <Menu.Menu position={position}>
    {items.map(item => (
      <Menu.Item {...item} />
    ))}
  </Menu.Menu>
);

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        items={leftItems}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top">
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          {<MenuItems items={rightItems} position="right" />}>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top">
    <MenuItems items={leftItems} position="left" />
    <MenuItems items={rightItems} position="right" />
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "View Listings", key: "listings" },
  { as: "a", content: "Create Listing", key: "createListing" },
  { as: "a", content: "Listing Policy", key: "listingPolicy" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

const App = () => <NavBar leftItems={leftItems} rightItems={rightItems} />;

export default NavBar;
