import React, { Fragment } from "react";
import Routes from "./Routes";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

const SiteContent = ({ handleUser, user }) => (
  <Fragment>
    <Routes handleUser={handleUser} user={user} />
    <Disclaimer />
    <Footer />
  </Fragment>
);

export default SiteContent;
