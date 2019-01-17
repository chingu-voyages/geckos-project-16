import React, { Component } from "react";
import { Container, Segment, Header, Button, Progress } from "semantic-ui-react";
import CreateListingForm from "./CreateListingForm";
import "./CreateListing.css";

class CreateListingHolder extends Component {
  render() {
    return (
      <Container>
        <Segment inverted color="pink">
          <Segment>
            <Header
              as="h1"
              dividing
              color="violet"
              content="Create a Listing"
              textAlign="center"
            />
            <Header
              as="h4"
              color="purple"
              content="Please fill in all required fields"
              textAlign="center"
            />
            <CreateListingForm handleSubmit={this.handleSubmit} />
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default CreateListingHolder;
