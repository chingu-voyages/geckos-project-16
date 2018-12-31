import React from "react";
import { Button, Container, Input, Segment, Form } from "semantic-ui-react";
import "./SearchBox.css";

const SearchBox = ({ searchChange, searchClear }) => {
  return (
    <Container id="search-container">
      <Segment id="search-container-segment">
        <Form>
          <Form.Group grouped>
            <label>
              <h4>Location</h4>
            </label>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchLocation"
                value="seoul"
                onChange={searchChange}
              />
              <label>Seoul</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchLocation"
                value="busan"
                onChange={searchChange}
              />
              <label>Busan</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchLocation"
                value="gwangju"
                onChange={searchChange}
              />
              <label>Gwangju</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchLocation"
                value="jeju"
                onChange={searchChange}
              />
              <label>Jeju</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchLocation"
                value="suwon"
                onChange={searchChange}
              />
              <label>Suwon</label>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>
              <h4>Gender</h4>
            </label>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchGender"
                value="male"
                onChange={searchChange}
              />
              <label>Male</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchGender"
                value="female"
                onChange={searchChange}
              />
              <label>Female</label>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>
              <h4>Breed</h4>
            </label>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchBreed"
                value="husky"
                onChange={searchChange}
              />
              <label>Husky</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchBreed"
                value="bulldog"
                onChange={searchChange}
              />
              <label>Bulldog</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchBreed"
                value="labrador"
                onChange={searchChange}
              />
              <label>Labrador</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchBreed"
                value="boxer"
                onChange={searchChange}
              />
              <label>Boxer</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchBreed"
                value="spaniel"
                onChange={searchChange}
              />
              <label>Spaniel</label>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>
              <h4>Age</h4>
            </label>
            <Form.Field inline>
              <Input type="radio" name="searchAge" value="0" onChange={searchChange} />
              <label>Under 1 year</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="searchAge" value="1-3" onChange={searchChange} />
              <label>1-3 years</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="searchAge" value="4-6" onChange={searchChange} />
              <label>4-6 years</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="searchAge" value="7-9" onChange={searchChange} />
              <label>7-9 years</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="searchAge" value="10" onChange={searchChange} />
              <label>Over 10 years</label>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>
              <h4>Color</h4>
            </label>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchColor"
                value="black"
                onChange={searchChange}
              />
              <label>Black</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchColor"
                value="white"
                onChange={searchChange}
              />
              <label>White</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchColor"
                value="brown"
                onChange={searchChange}
              />
              <label>Brown</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchColor"
                value="yellow"
                onChange={searchChange}
              />
              <label>Yellow</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="searchColor"
                value="grey"
                onChange={searchChange}
              />
              <label>Grey</label>
            </Form.Field>
          </Form.Group>
          <Button onClick={searchClear}>Clear filters</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default SearchBox;
