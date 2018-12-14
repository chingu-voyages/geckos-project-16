import React, { Fragment } from "react";
import { Image, Container } from "semantic-ui-react";

const ViewListingTitle = ({ name, imageMain, image2, image3, image4 }) => (
  <Fragment>
    <Container>
      <h3>My name is Test Dog!</h3>
      <Image src={imageMain} alt="Main image of pet" />
      <Image src={image2} alt="Additional image of pet" />
      <Image src={image3} alt="Additional image of pet" />
      <Image src={image4} alt="Additional image of pet" />
    </Container>
  </Fragment>
);

export default ViewListingTitle;
