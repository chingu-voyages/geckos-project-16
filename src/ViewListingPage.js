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
      // String or empty object or empty array???
      displayPet: "",
    };
  }

  // Fetch data for individual pet
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      this.setState({ displayPet: data[key] });
    } catch (err) {
      console.log(err);
    }
  }

  // Need to check the test data properly to make sure we're grabbing info from right place!!!!!!
  render() {
    const { displayPet } = this.state;
    return (
      <Fragment>
        <ViewListingTitle
          petName={displayPet.petName}
          imageMain={displayPet.images[0]}
          image2={displayPet.images[1]}
          image3={displayPet.images[2]}
          image4={displayPet.images[3]}
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
          isVaccinated={displayPet.vaccinated}
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
          contactName={displayPet.user.contactName}
          contactEmail={displayPet.user.email}
          fee={displayPet.adoptionFee}
        />
      </Fragment>
    );
  }
}

export default ViewListingPage;
