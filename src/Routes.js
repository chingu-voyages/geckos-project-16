import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import FeaturedPosts from "./FeaturedPosts";
import ViewListingHolder from "./ViewListingHolder";
import ListingPolicy from "./ListingPolicy";
import LatestListings from "./LatestListings";
import CreateListingHolder from "./CreateListingHolder";
import AuthHolder from "./AuthHolder";
import { Helmet } from "react-helmet";

const Routes = ({ handleUser, user }) => (
  <section>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Fragment>
            <Helmet>
              <title>Adopt a Korean Pet || Home</title>
              <meta
                name="keywords"
                content="Adopt,Pet,Korean animals,Adopt a Korean Pet"
              />
              <meta name="description" content="Adopt a Korean pet today" />
            </Helmet>
            <FeaturedPosts />
          </Fragment>
        )}
      />
      <Route
        path="/login"
        render={() => (
          <Fragment>
            <Helmet>
              <title>Adopt a Korean Pet || Login</title>
              <meta
                name="keywords"
                content="Adopt,Pet,Korean animals,Adopt a Korean Pet"
              />
              <meta
                name="description"
                content="Login to your account here to adopt a Korean pet today"
              />
            </Helmet>
            <AuthHolder handleUser={handleUser} />
          </Fragment>
        )}
      />
      <Route
        path="/signup"
        render={() => (
          <Fragment>
            <Helmet>
              <title>Adopt a Korean Pet || Register</title>
              <meta
                name="keywords"
                content="Adopt,Pet,Korean animals,Adopt a Korean Pet"
              />
              <meta
                name="description"
                content="Register here to adopt a Korean pet today"
              />
            </Helmet>
            <AuthHolder handleUser={handleUser} />
          </Fragment>
        )}
      />
      <Route
        path="/listing/:id"
        render={() => (
          <Fragment>
            <Helmet>
              <title>Adopt a Korean Pet || View Pet</title>
              <meta
                name="keywords"
                content="Adopt,Pet,Korean animals,Adopt a Korean Pet"
              />
              <meta name="description" content="View one of our Korean pet listings" />
            </Helmet>
            <ViewListingHolder user={user} />
          </Fragment>
        )}
      />
      <Route
        path="/listingpolicy"
        render={() => (
          <Fragment>
            <Helmet>
              <title>Adopt a Korean Pet || Listing Policy</title>
              <meta
                name="keywords"
                content="Adopt,Pet,Korean animals,Adopt a Korean Pet"
              />
              <meta
                name="description"
                content="Our listing policy which should be read by everybody wanting to list a Korean pet for adoption"
              />
            </Helmet>
            <ListingPolicy />
          </Fragment>
        )}
      />
      <Route
        path="/listings"
        render={() => (
          <Fragment>
            <Helmet>
              <title>Adopt a Korean Pet || View Listings</title>
              <meta
                name="keywords"
                content="Adopt,Pet,Korean animals,Adopt a Korean Pet"
              />
              <meta
                name="description"
                content="View, search and filter all of our Korean pet listings"
              />
            </Helmet>
            <LatestListings />
          </Fragment>
        )}
      />
      <Route
        path="/create"
        render={({ history }) => (
          <Fragment>
            <Helmet>
              <title>Adopt a Korean Pet || View Listings</title>
              <meta
                name="keywords"
                content="Adopt,Pet,Korean animals,Adopt a Korean Pet"
              />
              <meta
                name="description"
                content="View, search and filter all of our Korean pet listings"
              />
            </Helmet>
            <CreateListingHolder history={history} user={user} />
          </Fragment>
        )}
      />
    </Switch>
  </section>
);

export default Routes;
