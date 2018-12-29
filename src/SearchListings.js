import React, { Component } from "react";
import { Button, Container, Input, Segment, Form } from "semantic-ui-react";
import "./SearchListings.css";

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
    const value = event.target.value;
    const name = event.target.name;
    console.log(target, value, name);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Container id="search-container">
        <Segment id="search-container-segment">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group grouped>
              <label>
                <h4>Location</h4>
              </label>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="location"
                  value="seoul"
                  onChange={this.handleChange}
                />
                <label>Seoul</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="location"
                  value="busan"
                  onChange={this.handleChange}
                />
                <label>Busan</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="location"
                  value="gwangju"
                  onChange={this.handleChange}
                />
                <label>Gwangju</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="location"
                  value="jeju"
                  onChange={this.handleChange}
                />
                <label>Jeju</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="location"
                  value="suwon"
                  onChange={this.handleChange}
                />
                <label>Suwon</label>
              </Form.Field>
            </Form.Group>
            <Form.Group grouped>
              <label>
                <h4>Gender</h4>
              </label>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={this.handleChange}
                />
                <label>Male</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={this.handleChange}
                />
                <label>Female</label>
              </Form.Field>
            </Form.Group>
            <Form.Group grouped>
              <label>
                <h4>Breed</h4>
              </label>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="breed"
                  value="husky"
                  onChange={this.handleChange}
                />
                <label>Husky</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="breed"
                  value="bulldog"
                  onChange={this.handleChange}
                />
                <label>Bulldog</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="breed"
                  value="labrador"
                  onChange={this.handleChange}
                />
                <label>Labrador</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="breed"
                  value="boxer"
                  onChange={this.handleChange}
                />
                <label>Boxer</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="breed"
                  value="spaniel"
                  onChange={this.handleChange}
                />
                <label>Spaniel</label>
              </Form.Field>
            </Form.Group>
            <Form.Group grouped>
              <label>
                <h4>Age</h4>
              </label>
              <Form.Field inline>
                <Input type="radio" name="age" value="0" onChange={this.handleChange} />
                <label>Under 1 year</label>
              </Form.Field>
              <Form.Field inline>
                <Input type="radio" name="age" value="1-3" onChange={this.handleChange} />
                <label>1-3 years</label>
              </Form.Field>
              <Form.Field inline>
                <Input type="radio" name="age" value="4-6" onChange={this.handleChange} />
                <label>4-6 years</label>
              </Form.Field>
              <Form.Field inline>
                <Input type="radio" name="age" value="7-9" onChange={this.handleChange} />
                <label>7-9 years</label>
              </Form.Field>
              <Form.Field inline>
                <Input type="radio" name="age" value="10" onChange={this.handleChange} />
                <label>Over 10 years</label>
              </Form.Field>
            </Form.Group>
            <Form.Group grouped>
              <label>
                <h4>Color</h4>
              </label>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="color"
                  value="black"
                  onChange={this.handleChange}
                />
                <label>Black</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="color"
                  value="white"
                  onChange={this.handleChange}
                />
                <label>White</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="color"
                  value="brown"
                  onChange={this.handleChange}
                />
                <label>Brown</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="color"
                  value="yellow"
                  onChange={this.handleChange}
                />
                <label>Yellow</label>
              </Form.Field>
              <Form.Field inline>
                <Input
                  type="radio"
                  name="color"
                  value="grey"
                  onChange={this.handleChange}
                />
                <label>Grey</label>
              </Form.Field>
            </Form.Group>
            <Button>Clear filters</Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default SearchListings;
