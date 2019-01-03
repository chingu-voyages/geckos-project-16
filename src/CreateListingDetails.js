import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import "./CreateListing.css";

const ageOptions = [
  { key: "a", text: "1-3 years", value: "age1" },
  { key: "b", text: "4-7 years", value: "age2" },
];

const adoptionOptions = [
  { key: "s1", text: "Adoption Status 1", value: "status 1" },
  { key: "s2", text: "Adoption Status 2", value: "status 2" },
];

const weightOptions = [
  { key: "w1", text: "Weight Range 1", value: "range 1" },
  { key: "w2", text: "Weight Range 2", value: "range 2" },
];

class CreateListingDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form>
        <Form.Field inline class="form-text-field">
          <label>Pet Name</label>
          <input
            placeholder="Please enter pet's name"
            onChange={this.props.handleChange("name")}
            defaultValue={values.name}
          />
        </Form.Field>

        <Form.Group inline id="radio-3">
          <label>Type of Pet</label>
          <div>
            <Form.Radio
              label="Dog"
              value="d"
              checked={values.type === "d"}
              onChange={this.props.handleChange("type")}
            />
            <Form.Radio
              label="Cat"
              value="c"
              checked={values.type === "c"}
              onChange={this.props.handleChange("type")}
            />
            <Form.Radio
              label="Other"
              value="o"
              checked={values.type === "o"}
              onChange={this.props.handleChange("type")}
            />
          </div>
        </Form.Group>

        <Form.Group inline id="radio-2">
          <label>Gender</label>
          <div>
            <Form.Radio
              label="Male"
              value="m"
              checked={values.petGender === "m"}
              onChange={this.props.handleChange("petGender")}
            />
            <Form.Radio
              label="Female"
              value="f"
              checked={values.petGender === "f"}
              onChange={this.props.handleChange("petGender")}
            />
          </div>
        </Form.Group>

        <Form.Field inline>
          <label>Breed</label>
          <input
            placeholder="Please enter breed"
            onChange={this.props.handleChange("breed")}
            defaultValue={values.breed}
          />
        </Form.Field>

        <Form.Select fluid label="Age" options={ageOptions} placeholder="Age of pet" />

        <Form.Select
          fluid
          label="Adoption Status"
          options={adoptionOptions}
          placeholder="Adoption Status of pet"
        />

        <Form.Group inline id="radio-2">
          <label>Needs Foster</label>
          <div>
            <Form.Radio
              label="Yes"
              value="y"
              checked={values.foster === "y"}
              onChange={this.props.handleChange("foster")}
            />
            <Form.Radio
              label="No"
              value="n"
              checked={values.foster === "n"}
              onChange={this.props.handleChange("foster")}
            />
          </div>
        </Form.Group>

        <Form.Select
          fluid
          label="Weight"
          options={weightOptions}
          placeholder="Weight Status of pet"
        />

        <Form.Field inline>
          <label>Color</label>
          <input
            placeholder="Please enter color of pet"
            onChange={this.props.handleChange("color")}
            defaultValue={values.color}
          />
        </Form.Field>

        <Form.TextArea
          label="Description/Pet's Story"
          placeholder="Please enter a description"
        />

        <Form.Field inline>
          <label>Current Location</label>
          <input
            placeholder="Please enter current location of pet"
            onChange={this.props.handleChange("location")}
            defaultValue={values.location}
          />
        </Form.Field>

        <Form.Group inline id="radio-2">
          <label>Location Status</label>
          <div>
            <Form.Radio
              label="In a Home"
              value="h"
              checked={values.locStatus === "h"}
              onChange={this.props.handleChange("locStatus")}
            />
            <Form.Radio
              label="In a Shelter"
              value="s"
              checked={values.locStatus === "s"}
              onChange={this.props.handleChange("locStatus")}
            />
          </div>
        </Form.Group>

        <Form.Group inline id="radio-2">
          <label>Adoption Fee</label>
          <div>
            <Form.Radio
              label="Yes"
              value="y"
              checked={values.fee === "y"}
              onChange={this.props.handleChange("fee")}
            />
            <Form.Radio
              label="No"
              value="n"
              checked={values.fee === "n"}
              onChange={this.props.handleChange("fee")}
            />
            <Form.Field inline>
              <input
                placeholder="If yes, how much in Won?"
                onChange={this.props.handleChange("fee")}
                defaultValue={values.fee}
              />
            </Form.Field>
          </div>
        </Form.Group>
      </Form>
    );
  }
}

export default CreateListingDetails;
