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
              <Input type="radio" name="location" value="seoul" onChange={searchChange} />
              <label>Seoul</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="location" value="busan" onChange={searchChange} />
              <label>Busan</label>
            </Form.Field>
            <Form.Field inline>
              <Input
                type="radio"
                name="location"
                value="gwangju"
                onChange={searchChange}
              />
              <label>Gwangju</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="location" value="jeju" onChange={searchChange} />
              <label>Jeju</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="location" value="suwon" onChange={searchChange} />
              <label>Suwon</label>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>
              <h4>Gender</h4>
            </label>
            <Form.Field inline>
              <Input type="radio" name="gender" value="male" onChange={searchChange} />
              <label>Male</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="gender" value="female" onChange={searchChange} />
              <label>Female</label>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>
              <h4>Breed</h4>
            </label>
            <Form.Field inline>
              <Input type="radio" name="breed" value="husky" onChange={searchChange} />
              <label>Husky</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="breed" value="bulldog" onChange={searchChange} />
              <label>Bulldog</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="breed" value="labrador" onChange={searchChange} />
              <label>Labrador</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="breed" value="boxer" onChange={searchChange} />
              <label>Boxer</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="breed" value="spaniel" onChange={searchChange} />
              <label>Spaniel</label>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>
              <h4>Age</h4>
            </label>
            <Form.Field inline>
              <Input type="radio" name="age" value="0" onChange={searchChange} />
              <label>Under 1 year</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="age" value="1-3" onChange={searchChange} />
              <label>1-3 years</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="age" value="4-6" onChange={searchChange} />
              <label>4-6 years</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="age" value="7-9" onChange={searchChange} />
              <label>7-9 years</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="age" value="10" onChange={searchChange} />
              <label>Over 10 years</label>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>
              <h4>Color</h4>
            </label>
            <Form.Field inline>
              <Input type="radio" name="color" value="black" onChange={searchChange} />
              <label>Black</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="color" value="white" onChange={searchChange} />
              <label>White</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="color" value="brown" onChange={searchChange} />
              <label>Brown</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="color" value="yellow" onChange={searchChange} />
              <label>Yellow</label>
            </Form.Field>
            <Form.Field inline>
              <Input type="radio" name="color" value="grey" onChange={searchChange} />
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
