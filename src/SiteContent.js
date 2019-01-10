import React, { Fragment } from "react";
import Routes from "./Routes";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const SiteContent = () => (
  <Fragment>
    <Helmet>
      <title>Adopt a Korean Pet || Home</title>
      <meta name="keywords" content="Adopt,Pet,Korean animals,Adopt a Korean Pet" />
      <meta name="description" content="Adopt a Korean pet today" />
    </Helmet>
    <Routes />
    <Disclaimer />
    <Footer />
  </Fragment>
);

export default SiteContent;
