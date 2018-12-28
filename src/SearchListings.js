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
                  label="Seoul"
                  value="seoul"
                  checked={value === "seoul"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Busan"
                  value="busan"
                  checked={value === "busan"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Gwangju"
                  value="gwangju"
                  checked={value === "gwangju"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Jeju"
                  value="jeju"
                  checked={value === "jeju"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Suwon"
                  value="searchLocation"
                  checked={value === "suwon"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Gender</label>
                <Form.Radio
                  label="Male"
                  value="male"
                  checked={value === "male"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Female"
                  value="female"
                  checked={value === "female"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Breed</label>
                <Form.Radio
                  label="Husky"
                  value="husky"
                  checked={value === "husky"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Bulldog"
                  value="bulldog"
                  checked={value === "bulldog"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Labrador"
                  value="labrador"
                  checked={value === "labrador"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Boxer"
                  value="boxer"
                  checked={value === "boxer"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Spaniel"
                  value="spaniel"
                  checked={value === "spaniel"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Age</label>
                <Form.Radio
                  label="Under 1 year"
                  value="0"
                  checked={value === "0"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="1-3 years"
                  value="1-3"
                  checked={value === "1-3"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="4-6 years"
                  value="4-6"
                  checked={value === "4-6"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="7-9 years"
                  value="7-9"
                  checked={value === "7-9"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Over 10 years"
                  value="10"
                  checked={value === "10"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Color</label>
                <Form.Radio
                  label="Black"
                  value="black"
                  checked={value === "black"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="White"
                  value="white"
                  checked={value === "white"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Brown"
                  value="brown"
                  checked={value === "brown"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Yellow"
                  value="yellow"
                  checked={value === "yellow"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Grey"
                  value="grey"
                  checked={value === "grey"}
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
