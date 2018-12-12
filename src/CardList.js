import React from "react";
import CardComponent from "./CardComponent";

class CardList extends React.Component {
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
      <CardComponent
        key={i}
        image={pet.images[0]}
        name={pet.user.name}
        gender={pet.gender}
        age={pet.age}
        location={pet.location}
      />
    ));
  }
}

export default CardList;
