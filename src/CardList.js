import React from "react";
import CardComponent from "./CardComponent";
import { Grid } from "semantic-ui-react";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPets: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({ displayPets: data });
      });
  }

  render() {
    const { displayPets } = this.state;
    return displayPets.map((pet, i) => (
      <CardComponent
        key={i}
        image={displayPets[i].images[0]}
        name={displayPets[i].user.name}
        gender={displayPets[i].gender}
        age={displayPets[i].age}
        location={displayPets[i].location}
      />
    ));
  }
}

export default CardList;
