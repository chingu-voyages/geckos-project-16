import React, { Fragment } from "react";
import Routes from "./Routes";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

const SiteContent = ({ handleUser }) => (
  <Fragment>
    <Routes handleUser={handleUser} />
    <Disclaimer />
    <Footer />
  </Fragment>
);

export default SiteContent;
