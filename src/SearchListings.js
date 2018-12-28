import React, { Component, Fragment } from "react";
import { Button, Container, Divider, Icon, Segment, Form } from "semantic-ui-react";

class SearchListings extends Component {
  state = {
    location: "",
    gender: "",
    breed: "",
    age: "",
    color: "",
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { value, location, gender, breed, age, color } = this.state;
    return (
      <Fragment>
        <Container id="container">
          <Segment id="container-segment">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group grouped>
                <label>Current Location</label>
                <Form.Radio
                  label="Seoul"
                  name="location"
                  value="seoul"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Busan"
                  name="location"
                  value="busan"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Gwangju"
                  name="location"
                  value="gwangju"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Jeju"
                  name="location"
                  value="jeju"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Suwon"
                  name="location"
                  value="suwon"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Gender</label>
                <Form.Radio
                  label="Male"
                  name="gender"
                  value="male"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Female"
                  name="gender"
                  value="female"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Breed</label>
                <Form.Radio
                  label="Husky"
                  name="breed"
                  value="husky"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Bulldog"
                  name="breed"
                  value="bulldog"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Labrador"
                  name="breed"
                  value="labrador"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Boxer"
                  name="breed"
                  value="boxer"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Spaniel"
                  name="breed"
                  value="spaniel"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Age</label>
                <Form.Radio
                  label="Under 1 year"
                  name="age"
                  value="0"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="1-3 years"
                  name="age"
                  value="1-3"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="4-6 years"
                  name="age"
                  value="4-6"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="7-9 years"
                  name="age"
                  value="7-9"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Over 10 years"
                  name="age"
                  value="10"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group grouped>
                <label>Color</label>
                <Form.Radio
                  label="Black"
                  name="color"
                  value="black"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="White"
                  name="color"
                  value="white"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Brown"
                  name="color"
                  value="brown"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Yellow"
                  name="color"
                  value="yellow"
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Grey"
                  name="color"
                  value="grey"
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
