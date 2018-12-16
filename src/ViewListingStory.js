import React, { Fragment } from "react";
import { Container, Divider } from "semantic-ui-react";

const ViewListingStory = ({ story }) => (
  <Fragment>
    <Container>
      <h3>My story</h3>
      <p>{story}</p>
      <Divider />
    </Container>
  </Fragment>
);

export default ViewListingStory;
