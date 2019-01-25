import React, { Component, Fragment } from "react";
import { Menu, Sidebar, Responsive } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import BlurredLoader from "../reusable/BlurredLoader";
import SiteContent from "./SiteContent";
import ScrollToTop from "./ScrollToTop";
import { verifyUser } from "../../helpers/auth";
import { fetcher } from "../../helpers";
import "./NavBar.css";

export default withRouter(
  class NavBar extends Component {
    state = { user: null, posts: [], isLoading: true };

    // check if there's a user and get all posts on loading
    // instead of repeated calls to our API, which is on a free tier
    // we'll make one fetch here and then pass down through props
    async componentDidMount() {
      try {
        // checks if user is in localStorage
        const user = await verifyUser();
        const resp = await fetcher("/posts", {});
        const posts = await resp.json();
        if (!resp.ok) throw posts;
        this.setState({ user, posts, isLoading: false });
      } catch (err) {
        console.log(err);
        this.setState({ isLoading: false }, () => this.props.history.push("/error"));
      }
    }

    updatePosts = () => {
      this.setState({ isLoading: true }, async () => {
        try {
          const resp = await fetcher("/posts", {});
          const posts = await resp.json();
          if (!resp.ok) throw posts;
          this.setState({ posts, isLoading: false });
        } catch (err) {
          console.log(err);
          this.setState({ isLoading: false }, () => this.props.history.push("/error"));
        }
      });
    };

    handleLogout = () => this.setState({ user: null }, localStorage.clear());

    handleUser = user => this.setState({ user });

    isBrowser = () => typeof window !== "undefined";

    getWidth = () => (this.isBrowser() ? window.innerWidth : Infinity);

    render() {
      const { isLoading } = this.state;
      console.log(this.isBrowser());
      console.log(this.getWidth());
      return (
        <BlurredLoader isLoading={isLoading}>
          <ScrollToTop />
          <Responsive fireOnMount getWidth={this.getWidth} maxWidth={767}>
            <NavBarMobile
              {...this.state}
              handleUser={this.handleUser}
              handleLogout={this.handleLogout}
              updatePosts={this.updatePosts}
            />
          </Responsive>
          <Responsive fireOnMount getWidth={this.getWidth} minWidth={768}>
            <NavBarDesktop
              {...this.state}
              handleUser={this.handleUser}
              handleLogout={this.handleLogout}
              updatePosts={this.updatePosts}
            />
          </Responsive>
        </BlurredLoader>
      );
    }
  }
);

// used for desktop screens
const NavBarDesktop = ({ handleUser, handleLogout, updatePosts, ...state }) => {
  console.log("isDeskTop");
  return (
    <Fragment>
      <Menu fixed="top">
        <MenuItems items={leftItems} />
        <MenuItems
          items={rightItems}
          user={state.user}
          handleLogout={handleLogout}
          position="right"
        />
      </Menu>
      <SiteContent handleUser={handleUser} updatePosts={updatePosts} {...state} />
    </Fragment>
  );
};

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
    console.log("isMobile: true");
    const { visible } = this.state;
    const { handleUser, handleLogout, updatePosts, ...state } = this.props;
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
              user={state.user}
              handleLogout={handleLogout}
              position="right"
            />
          </Menu>
          <SiteContent handleUser={handleUser} updatePosts={updatePosts} {...state} />
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
