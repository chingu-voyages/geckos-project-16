import React, { Component, Fragment } from "react";

import ViewListingTitle from "./ViewListingTitle";
import ViewListingFacts from "./ViewListingFacts";
import ViewListingInfo from "./ViewListingInfo";
import ViewListingStory from "./ViewListingStory";
import ViewListingAction from "./ViewListingAction";

class ViewListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPet: {},
    };
  }

  // Fetch data for individual pet
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      this.setState({ displayPet: data[1] });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { displayPet } = this.state;
    return (
      <Fragment>
        <ViewListingTitle
          petName={displayPet.petName}
          imageMain={displayPet.images ? displayPet.images[0] : null}
          image2={displayPet.images ? displayPet.images[1] : null}
          image3={displayPet.images ? displayPet.images[2] : null}
          image4={displayPet.images ? displayPet.images[3] : null}
        />
        <ViewListingFacts
          breed={displayPet.breed}
          gender={displayPet.gender}
          age={displayPet.age}
          color={displayPet.color}
          weight={displayPet.weight}
          location={displayPet.location}
        />
        <ViewListingInfo
          isSpayed={displayPet.spayed}
          vaccinated={displayPet.vaccinated}
          goodWithKids={displayPet.goodWithKids}
          goodWithDogs={displayPet.goodWithDogs}
          goodWithCats={displayPet.goodWithCats}
          houseTrained={displayPet.houseTrained}
          leashTrained={displayPet.leashTrained}
          crateTrained={displayPet.crateTrained}
          litterTrained={displayPet.litterTrained}
        />
        <ViewListingStory story={displayPet.description} />
        <ViewListingAction
          contactName={displayPet.user ? displayPet.user.contactName : null}
          contactEmail={displayPet.user ? displayPet.user.email : null}
          fee={displayPet.adoptionFee}
        />
      </Fragment>
    );
  }
}

export default ViewListingPage;
