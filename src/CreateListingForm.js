import React, { Component } from "react";
import CreateListingDetails from "./CreateListingDetails";
import CreateListingConfirmation from "./CreateListingConfirmation";
import CreateListingSuccess from "./CreateListingSuccess";

class CreateListingForm extends Component {
  state = {
    step: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      name,
      type,
      gender,
      breed,
      age,
      status,
      foster,
      weight,
      color,
      characteristics,
      story,
      location,
      locStatus,
      fee,
      contactName,
      contactEmail,
    } = this.state;
    const values = {
      name,
      type,
      gender,
      breed,
      age,
      status,
      foster,
      weight,
      color,
      characteristics,
      story,
      location,
      locStatus,
      fee,
      contactName,
      contactEmail,
    };
    switch (step) {
      case 1:
        return (
          <CreateListingDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <CreateListingConfirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <CreateListingSuccess />;
      default:
      //do nothing
    }
  }
}

export default CreateListingForm;
