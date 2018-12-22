import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ViewListingPage from "./ViewListingPage";
import ListingPolicy from "./ListingPolicy";
import CardList from "./CardList";

const styles = {
  padding: "20px",
  marginTop: "40px",
};

class Routes extends Component {
  render() {
    return (
      <section style={styles}>
        <Switch>
          {/* <Route exact path="/" component={FeaturedPets} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/listing/:id" component={ViewListingPage} />
          <Route path="/listingpolicy" component={ListingPolicy} />
          <Route path="/listings" component={CardList} />
        </Switch>
      </section>
    );
  }
}

export default Routes;
