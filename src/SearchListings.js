import React, { Component, Fragment } from "react";
import { Button, Container, Divider, Icon, Segment, Form } from "semantic-ui-react";

class SearchListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocation: "",
      searchGender: "",
      searchAge: "",
      searchColor: "",
      searchShelter: "",
      searchItems: 9,
    };
  }

  render() {
    return (
      <Fragment>
        <Container id="container">
          <Segment id="container-segment" textAlign="center">
            <h2>Search Settings</h2>
          </Segment>
        </Container>
      </Fragment>
    );
  }
}

export default SearchListings;
