import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class LatestListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPets: [],
      searchLocation: "",
      searchGender: "",
      searchBreed: "",
      searchAge: "",
      searchColor: "",
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

  onSearchChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      displayPets,
      searchLocation,
      searchGender,
      searchBreed,
      searchAge,
      searchColor,
    } = this.state;
    const filteredPets = displayPets.filter(dog => {
      // This is where the magic needs to happen
      return dog;
    });
    return !displayPets.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList pets={filteredPets} />
      </div>
    );
  }
}

export default LatestListings;
