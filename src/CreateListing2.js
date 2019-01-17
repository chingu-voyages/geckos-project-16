import React, { Component, Fragment } from "react";
import { Form, Input } from "semantic-ui-react";

class CreateListing2 extends Component {
  state = {
    description: "",
    location: "",
    adoptionFee: 0,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const { description, location, adoptionFee } = this.state;
    return (
      <Fragment>
        <Form.Group widths="equal">
          <Form.Field required>
            <label>Location</label>
            <Input
              fluid
              name="location"
              value={location}
              icon="map marker alternate"
              iconPosition="left"
              placeholder="Location"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Adoption Fee</label>
            <Input
              fluid
              type="number"
              name="adoptionFee"
              value={adoptionFee}
              icon="won sign"
              iconPosition="left"
              placeholder="Adoption Fee"
              min="0"
              max="10000000"
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Dropdown
            fluid
            multiple
            selection
            label="Interaction Profile"
            options={goodWithOpts}
            placeholder="He/She's good with _______"
            onChange={this.handleChange}
          />
          <Form.Dropdown
            fluid
            multiple
            selection
            label="Training Profile"
            options={trainedOpts}
            placeholder="He/She's been _______ trained"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          required
          label="Description"
          value={description}
          name="description"
          placeholder="Enter any additional info or history here"
          autoHeight
          row="4"
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default CreateListing2;

const goodWithOpts = [
  { key: "dogs", text: "Dogs", value: "dogs" },
  { key: "cats", text: "Cats", value: "cats" },
  { key: "kids", text: "Kids", value: "kids" },
];

const trainedOpts = [
  { key: "leash", text: "Leash", value: "leash" },
  { key: "house", text: "House", value: "house" },
  { key: "crate", text: "Crate", value: "crate" },
  { key: "litter", text: "Litter", value: "litter" },
];
