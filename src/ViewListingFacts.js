import React, { Fragment } from "react";

const ViewListingFacts = ({ breed, gender, age, color, weight, location }) => (
  <Fragment>
    <h3>My name is Test Dog!</h3>
    <Image src={imageMain} alt="Main image of pet" />
    <Image src={image2} alt="Additional image of pet" />
    <Image src={image3} alt="Additional image of pet" />
    <Image src={image4} alt="Additional image of pet" />
  </Fragment>
);

export default ViewListingFacts;
