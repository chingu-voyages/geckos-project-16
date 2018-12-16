import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";

const ViewListingStory = ({ story }) => (
  <Fragment>
    <Container>
      <h3>My story</h3>
      <p>{story}</p>
    </Container>
  </Fragment>
);

export default ViewListingStory;
