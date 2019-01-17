import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import CreateListing1 from "./CreateListing1";
import CreateListing2 from "./CreateListing2";
import CreateListing3 from "./CreateListing3";

class CreateListingForm extends Component {
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
    description: "",
    location: "",
    adoptionFee: 0,
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
      location,
      adoptionFee,
      description,
    } = this.state;
    return (
      <Form>
        <CreateListing1
          handleChange={this.handleChange}
          type={type}
          breed={breed}
          ageNum={ageNum}
          agePeriod={agePeriod}
          gender={gender}
          size={size}
          color={color}
          spayed={spayed}
          vaccinated={vaccinated}
        />
        <CreateListing2
          handleChange={this.handleChange}
          petName={petName}
          description={description}
          location={location}
          adoptionFee={adoptionFee}
          gender={!gender ? "He/She's" : gender === "male" ? "He's" : "She's"}
        />
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
        <CreateListing3 />
      </Form>
    );
  }
}

export default CreateListingForm;
