import React, { Component, Fragment } from "react";
import { Button, Container, Divider, Icon, Segment, Form } from "semantic-ui-react";

class SearchListings extends Component {
  state = {
    searchLocation: "",
    searchGender: "",
    searchAge: "",
    searchColor: "",
    searchShelter: "",
    searchItems: 9,
  };

  handleChange = (event, { value }) => {
    const target = event.target;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <Container id="container">
          <Segment id="container-segment">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group grouped>
                <label>Current Location</label>
                <Form.Radio
                  label="Small"
                  value="sm"
                  checked={value === "sm"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Medium"
                  value="md"
                  checked={value === "md"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Large"
                  value="lg"
                  checked={value === "lg"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Segment>
        </Container>
      </Fragment>
    );
  }
}

export default SearchListings;
