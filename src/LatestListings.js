import React, { Component } from "react";
import CardList from "./CardList";

class LatestListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPets: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      this.setState({ displayPets: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { displayPets } = this.state;
    return displayPets.map((pet, i) => (
      <div>
        <CardList pets={filteredPets} />
        <CardComponent
          key={i}
          image={pet.images[0]}
          name={pet.petName}
          gender={pet.gender}
          age={pet.age}
          location={pet.location}
        />
      </div>
    ));
  }
}

export default LatestListings;
