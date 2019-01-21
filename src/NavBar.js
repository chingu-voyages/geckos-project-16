import React, { Component, Fragment } from "react";
import { Menu, Sidebar, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BlurredLoader from "./BlurredLoader";
import SiteContent from "./SiteContent";
import ScrollToTop from "./ScrollToTop";
import { verifyUser } from "./helpers/auth";
import "./NavBar.css";

export default class NavBar extends Component {
  state = { user: null, isLoading: true };

  async componentDidMount() {
    // checks if user is in localStorage
    const user = await verifyUser();
    this.setState({ user, isLoading: false });
  }

  handleLogout = () => this.setState({ user: null }, localStorage.clear());

  handleUser = user => this.setState({ user });

  render() {
    const { isLoading, user } = this.state;
    return (
      <BlurredLoader isLoading={isLoading}>
        <ScrollToTop />
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            user={user}
            handleUser={this.handleUser}
            handleLogout={this.handleLogout}
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop
            user={user}
            handleUser={this.handleUser}
            handleLogout={this.handleLogout}
          />
        </Responsive>
      </BlurredLoader>
    );
  }
}

// used for desktop screens
const NavBarDesktop = ({ user, handleUser, handleLogout }) => (
  <Fragment>
    <Menu fixed="top">
      <MenuItems items={leftItems} />
      <MenuItems
        items={rightItems}
        user={user}
        handleLogout={handleLogout}
        position="right"
      />
    </Menu>
    <SiteContent handleUser={handleUser} user={user} />
  </Fragment>
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
    const { user, handleUser, handleLogout } = this.props;
    return (
      <Sidebar.Pushable>
        <Sidebar as={Menu} animation="overlay" icon="labeled" vertical visible={visible}>
          <MenuItems items={leftItems} />
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          animation={"overlay"}
          onClick={this.handlePusher}
          style={{ minHeight: "100vh" }}
        >
          <Menu fixed="top">
            <Menu.Item onClick={this.handleToggle} icon="sidebar" />
            <MenuItems
              items={rightItems}
              user={user}
              handleLogout={handleLogout}
              position="right"
            />
          </Menu>
          <SiteContent handleUser={handleUser} user={user} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

// maps over items array props and returns menu items
const MenuItems = ({ items, position, user, handleLogout }) => (
  <Menu.Menu position={position}>
    {user ? (
      <Menu.Item as="a" onClick={handleLogout} content="Logout" />
    ) : (
      items.map(item => <Menu.Item {...item} />)
    )}
  </Menu.Menu>
);

// Used to create menu items
const leftItems = [
  { as: Link, to: "/", icon: "paw", key: "home" },
  { as: Link, to: "/listings", content: "View Listings", key: "listings" },
  { as: Link, to: "/create", content: "Create Listing", key: "createListing" },
  { as: Link, to: "/listingpolicy", content: "Listing Policy", key: "listingPolicy" },
];
const rightItems = [
  { as: Link, to: "/login", content: "Login", key: "login" },
  { as: Link, to: "/signup", content: "Register", key: "register" },
];
