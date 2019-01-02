import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class CreateListingDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form>
        <h1 className="ui centered">Create a new Listing</h1>
        <Form.Group inline>
          <label>Peet Name</label>
          <input
            placeholder="Please enter pet's name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default CreateListingDetails;
