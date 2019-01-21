import React from "react";
import StyledContainer from "./StyledContainer";
import CreateListingForm from "./CreateListingForm";
import "./CreateListing.css";

const initialState = {
  petName: "",
  type: "",
  breed: "",
  gender: "",
  size: "",
  color: "",
  description: "",
  location: "",
  adoptionFee: "",
  ageNum: "",
  agePeriod: "months",
  spayed: false,
  vaccinated: false,
  trained: [],
  goodWith: [],
  images: [],
  formErrors: [],
  errorMsg: "",
  errorStatus: null,
  isProcessing: false,
};

// history comes from react router
const CreateListingHolder = ({ history, user }) => (
  <StyledContainer
    topHeader="Create a Listing"
    btmHeader="Please fill in all required fields"
  >
    <CreateListingForm history={history} user={user} initialState={initialState} />
  </StyledContainer>
);

export default CreateListingHolder;
