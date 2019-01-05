import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import FeaturedPosts from "./FeaturedPosts";
import ViewListingHolder from "./ViewListingHolder";
import ListingPolicy from "./ListingPolicy";
import LatestListings from "./LatestListings";

const styles = {
  padding: "20px",
  marginTop: "65px",
};

class Routes extends Component {
  render() {
    return (
      <section style={styles}>
        <Switch>
          <Route exact path="/" component={FeaturedPosts} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/listing/:id" component={ViewListingHolder} />
          <Route path="/listingpolicy" component={ListingPolicy} />
          <Route path="/listings" component={LatestListings} />
        </Switch>
      </section>
    );
  }
}

export default Routes;
