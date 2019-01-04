import React from "react";
import { Header, Container, Segment, Form } from "semantic-ui-react";
import "./SearchBox.css";

const SearchBox = ({ searchParams, checkedObj, searchChange, searchClear }) => (
  <Container id="search-container">
    <Segment inverted color="pink" id="search-container-segment">
      <Form loading={!searchParams[0].values.length}>
        {searchParams.map(({ label, values }) => (
          <Form.Group grouped key={label}>
            <Header as="h4" color="violet" content={label} />
            {values.map(([value, count]) => (
              <Form.Checkbox
                key={value}
                color="violet"
                name={label}
                value={value}
                checked={checkedObj[label] === value}
                label={`${value} (${count})`}
                onChange={searchChange}
              />
            ))}
          </Form.Group>
        ))}
        <Form.Button
          size="big"
          color="purple"
          content="Unselect All"
          onClick={searchClear}
        />
      </Form>
    </Segment>
  </Container>
);

export default SearchBox;
