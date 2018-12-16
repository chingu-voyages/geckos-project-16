import React, { Fragment } from "react";
import { Image, Container } from "semantic-ui-react";

const ViewListingTitle = ({ petName, imageMain, image2, image3, image4 }) => (
  <Fragment>
    <Container>
      <h3>{`My name is ${petName}!`}</h3>
      <Image src={imageMain} alt="Main image of pet" />
      <Image src={image2} alt="Additional image of pet" className="subImage" />
      <Image src={image3} alt="Additional image of pet" className="subImage" />
      <Image src={image4} alt="Additional image of pet" className="subImage" />
    </Container>
  </Fragment>
);

export default ViewListingTitle;
