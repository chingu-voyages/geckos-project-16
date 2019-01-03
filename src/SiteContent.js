import React, { Fragment } from "react";
import Routes from "./Routes";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

const SiteContent = () => (
  <Fragment>
    <Routes />
    <Disclaimer />
    <Footer />
  </Fragment>
);

export default SiteContent;
