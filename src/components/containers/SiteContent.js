import React, { Fragment } from "react";
import Routes from "./Routes";
import Disclaimer from "../static/Disclaimer";
import Footer from "../static/Footer";

const SiteContent = props => (
  <Fragment>
    <Routes {...props} />
    <Disclaimer />
    <Footer />
  </Fragment>
);

export default SiteContent;
