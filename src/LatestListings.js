// If there's more than 5, use a 'show more' accordion

import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { Grid, Container } from "semantic-ui-react";

// used to map through object
const labels = ["location", "gender", "breed", "color"];

// stringifying to eliminate obj references
// use JSON.parse(fields)
const fields = JSON.stringify({
  location: {},
  gender: {},
  breed: {},
  color: {},
});

// holds our checked box values
const checkedObj = {
  location: "",
  gender: "",
  breed: "",
  color: "",
};

class LatestListings extends Component {
  state = {
    allPets: [],
    filteredPets: [],
    checkedObj,
    searchFields: JSON.parse(fields),
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:4000/posts");
      const allPets = await response.json();
      this.setState({ allPets }, this.handleLogic);
    } catch (err) {
      console.log(err);
    }
  }

  handleLogic = (
    filteredPets = this.state.allPets,
    checkedObj = this.state.checkedObj
  ) => {
    const searchFields = this.createSearchBoxes(filteredPets);
    this.setState({ searchFields, filteredPets, checkedObj });
  };

  createSearchBoxes = petsArr =>
    petsArr.reduce((acc, cVal) => {
      labels.forEach(value => {
        acc[value][cVal[value]]
          ? (acc[value][cVal[value]] += 1)
          : (acc[value][cVal[value]] = 1);
      });
      return acc;
    }, JSON.parse(fields));

  handleBoxClick = (e, { value, name, checked }) => {
    const updater = checked ? value : "";
    const checkedObj = { ...this.state.checkedObj, [name]: updater };
    this.handleFilter(name, value, checked, checkedObj);
  };

  handleFilter = (name, value, checked, checkedObj) => {
    const { filteredPets, allPets } = this.state;
    const filteredResults = checked
      ? // user checks a box - filter the filtered results further
        filteredPets.filter(pet => pet[name] === value)
      : // user unchecks a box - check if any boxes are checked at all
      !labels.every(label => !checkedObj[label])
      ? // if there is, filter all the pets again
        allPets.filter(pet =>
          labels.every(label =>
            checkedObj[label] ? checkedObj[label] === pet[label] : true
          )
        )
      : // if there isn't, return all pets
        allPets;
    this.handleLogic(filteredResults, checkedObj);
  };

  handleClear = () => this.handleLogic(this.state.allPets, checkedObj);

  render() {
    const { filteredPets, searchFields, checkedObj } = this.state;
    const searchParams = labels.map(label => ({
      label,
      values: Object.entries(searchFields[label]),
    }));
    const areBoxesEmpty = Object.values(checkedObj).every(x => !x.length);
    return (
      <Container>
        <Grid stackable columns={16}>
          <Grid.Column width={4}>
            <SearchBox
              areBoxesEmpty={areBoxesEmpty}
              searchParams={searchParams}
              checkedObj={checkedObj}
              searchChange={this.handleBoxClick}
              searchClear={this.handleClear}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <CardList pets={filteredPets} mobile={16} tablet={8} computer={5} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default LatestListings;
