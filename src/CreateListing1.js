import React, { Component, Fragment } from "react";
import { Form, Dropdown, Input } from "semantic-ui-react";

class CreateListing1 extends Component {
  state = {
    petName: "",
    type: "",
    breed: "",
    ageNum: "",
    agePeriod: "months",
    gender: "",
    size: "",
    color: "",
    spayed: false,
    vaccinated: false,
  };

  handleChange = (e, { name, value, checked }) =>
    this.setState({ [name]: checked ? checked : value });

  render() {
    const {
      petName,
      type,
      breed,
      ageNum,
      agePeriod,
      gender,
      size,
      color,
      spayed,
      vaccinated,
    } = this.state;
    return (
      <Fragment>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            required
            label="Pet Name"
            name="petName"
            placeholder="Pet Name"
            value={petName}
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            required
            label="Animal Type"
            name="type"
            placeholder="Animal Type"
            options={typeOpts}
            value={type}
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            required
            label="Gender"
            name="gender"
            placeholder="Gender"
            options={genderOpts}
            value={gender}
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            required
            label="Size"
            name="size"
            placeholder="Size"
            options={sizeOpts}
            value={size}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            required
            label="Breed"
            name="breed"
            placeholder="Breed"
            value={breed}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            required
            label="Color"
            name="color"
            placeholder="Color"
            value={color}
            onChange={this.handleChange}
          />
          <Form.Field required>
            <label>Age</label>
            <Input
              fluid
              name="ageNum"
              type="number"
              label={
                <Dropdown
                  name="agePeriod"
                  options={ageOpts}
                  value={agePeriod}
                  onChange={this.handleChange}
                />
              }
              labelPosition="right"
              placeholder="Age"
              value={ageNum}
              min="1"
              max="23"
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Checkbox
            name="vaccinated"
            checked={vaccinated}
            label="Is Vaccinated?"
            onChange={this.handleChange}
          />
          <Form.Checkbox
            name="spayed"
            checked={spayed}
            label="Is Spayed?"
            onChange={this.handleChange}
          />
        </Form.Group>
      </Fragment>
    );
  }
}

export default CreateListing1;

const genderOpts = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
];

const typeOpts = [
  { key: "c", text: "Dog", value: "dog" },
  { key: "d", text: "Cat", value: "cat" },
  { key: "o", text: "Other", value: "other" },
];

const ageOpts = [
  { key: "months", text: "months", value: "months" },
  { key: "years", text: "years", value: "years" },
];

const sizeOpts = [
  { key: "small", text: "Small", value: "small" },
  { key: "medium", text: "Medium", value: "medium" },
  { key: "large", text: "Large", value: "large" },
];
