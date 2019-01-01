import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class LatestListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPets: [],
      filteredPets: [],
      radiosChecked: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      this.setState({ displayPets: data, filteredPets: data });
    } catch (err) {
      console.log(err);
    }
  }

  searchClear = () => {
    this.setState({
      radiosChecked: [],
    });
  };

  onSearchChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.handleFilter
    );
  };

  handleFilter = () => {
    const { filteredPets, radiosChecked } = this.state;
    const filtered = filteredPets.filter(pet => {
      return radiosChecked.some(name => {
        return name === pet[name];
      });
    });
  };

  render() {
    // return !filteredPets.length ? (
    //   <h1>Loading</h1>
    // ) : (
    return (
      <div>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList pets={this.state.filteredPets} />
      </div>
    );
  }
}

export default LatestListings;
