import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import CreateListingFields from "./CreateListingFields";
import FormMessages from "./FormMessages";
import { fetcher } from "./helpers";
import { cloudinaryOptions, checkRequiredFields } from "./helpers";

class CreateListingForm extends Component {
  state = { ...this.props.initialState };

  handleChange = (e, { name, value, checked }) =>
    this.setState({ [name]: checked ? checked : value }, this._checkFieldsAfterUpdating);

  handleCreate = async () => {
    try {
      if (!this.props.user) throw new Error("You must log in first");
      const { userId, fullName, email, token } = this.props.user;
      const owner = {
        id: userId,
        name: fullName,
        email,
      };
      const {
        petName,
        type,
        breed,
        gender,
        size,
        color,
        description,
        location,
        adoptionFee,
        goodWith,
        trained,
        ageNum,
        agePeriod,
        spayed,
        vaccinated,
        images,
      } = this.state;
      const body = JSON.stringify({
        owner,
        petName,
        type,
        breed,
        gender,
        size,
        color,
        description,
        location,
        adoptionFee,
        spayed,
        vaccinated,
        goodWith,
        trained,
        images: images.map(img => img.url),
        age: `${ageNum} ${agePeriod}`,
      });
      const resp = await fetcher("/posts", {
        method: "POST",
        body,
        headers: { Authorization: `Bearer ${token}` },
      });
      const post = await resp.json();
      if (!resp.ok) throw post;
      this.props.history.push(`/listing/${post._id}`);
    } catch (err) {
      console.log(err);
      this.setState({
        isProcessing: false,
        errorStatus: true,
        errorMsg: err.message,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const errorsObj = checkRequiredFields(this.state);
    this.setState(
      { ...errorsObj, isProcessing: !errorsObj.errorStatus },
      () => !errorsObj.errorStatus && this.handleCreate()
    );
  };

  handleImgDeletion = async (e, { delete_token, path }) => {
    const start = process.env.REACT_APP_IMG_DELETE_URL;
    const end = `?token=${delete_token}`;
    const images = this.state.images.filter(img => img.path !== path);
    this.setState({ images }, () => {
      fetch(start + end, { method: "POST" });
      this._checkFieldsAfterUpdating();
    });
  };

  openImgWidget = () => {
    const { images } = this.state;
    const { formErrors } = checkRequiredFields(this.state);
    // don't open the upload widget if...
    if (
      images.length >= 3 ||
      !formErrors.length ||
      !(formErrors.length === 1 && formErrors.includes("images"))
    )
      return;
    window.cloudinary.openUploadWidget(cloudinaryOptions, (err, { event, info }) => {
      if (event !== "success") return;
      this.setState(
        {
          images: [
            ...images,
            {
              path: info.path,
              url: info.secure_url,
              thumb: info.thumbnail_url,
              token: info.delete_token,
            },
          ],
        },
        this._checkFieldsAfterUpdating
      );
    });
  };

  _checkFieldsAfterUpdating = () => {
    if (this.state.errorStatus) {
      const errorsObj = checkRequiredFields(this.state);
      return this.setState({ ...errorsObj });
    }
  };

  render() {
    const { gender, formErrors, errorStatus, errorMsg, isProcessing } = this.state;
    return (
      <Form loading={isProcessing} error={errorStatus}>
        <CreateListingFields
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleImgDeletion={this.handleImgDeletion}
          openImgWidget={this.openImgWidget}
          formErrors={formErrors}
          errorStatus={errorStatus}
          pronoun={!gender ? "He/She's" : gender === "male" ? "He's" : "She's"}
        />
        <FormMessages errorMsg={errorMsg} errorStatus={errorStatus} />
      </Form>
    );
  }
}

export default CreateListingForm;
