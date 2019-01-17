import React, { Fragment } from "react";
import { Form, Input } from "semantic-ui-react";

const CreateListing2 = ({
  handleChange,
  description,
  petName,
  location,
  adoptionFee,
  gender,
}) => (
  <Fragment>
    <Form.Group widths="equal">
      <Form.Input
        fluid
        required
        label="Pet Name"
        name="petName"
        placeholder="Pet Name"
        value={petName}
        onChange={handleChange}
      />
      <Form.Field required>
        <label>Location</label>
        <Input
          fluid
          name="location"
          value={location}
          icon="map marker alternate"
          iconPosition="left"
          placeholder="Location"
          onChange={handleChange}
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
          onChange={handleChange}
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
        placeholder={`${gender} good with _______`}
        onChange={handleChange}
      />
      <Form.Dropdown
        fluid
        multiple
        selection
        label="Training Profile"
        options={trainedOpts}
        placeholder={`${gender} been _______ trained`}
        onChange={handleChange}
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
      onChange={handleChange}
    />
  </Fragment>
);

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
