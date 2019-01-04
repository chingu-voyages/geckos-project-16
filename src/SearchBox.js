import React, { Component } from "react";
import { Header, Icon, Segment, Form, Accordion, Button } from "semantic-ui-react";
import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    isOpen: window.innerWidth > 767,
    isDisabled: window.innerWidth > 767,
  };

  handleClick = () => {
    if (this.state.isOpen) {
      document.querySelector(".pushable").scrollIntoView(true);
    } else {
      document.getElementById("search-container").scrollIntoView(true);
    }
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const {
      areBoxesEmpty,
      searchParams,
      checkedObj,
      searchChange,
      searchClear,
    } = this.props;
    const { isOpen, isDisabled } = this.state;
    return (
      <Segment inverted color="pink" id="search-container">
        <Accordion>
          <Accordion.Title onClick={!isDisabled ? this.handleClick : null}>
            <Header
              dividing
              as="h1"
              color="violet"
              content="Filters"
              textAlign="center"
            />
          </Accordion.Title>
          <Accordion.Content active={isOpen}>
            <Form loading={!searchParams[0].values.length}>
              {searchParams.map(({ label, values }) => (
                <Form.Group grouped key={label}>
                  <Header as="h3" color="violet" content={label} />
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
            </Form>
            <Button
              fluid
              size="big"
              color="purple"
              content="View All"
              disabled={areBoxesEmpty}
              onClick={searchClear}
            />
          </Accordion.Content>
          {!isDisabled && (
            <Icon
              onClick={!isDisabled ? this.handleClick : null}
              name={`chevron ${isOpen ? "up" : "down"}`}
              size="huge"
              color="violet"
            />
          )}
        </Accordion>
      </Segment>
    );
  }
}

export default SearchBox;

// const SearchBox = ({
//   areBoxesEmpty,
//   searchParams,
//   checkedObj,
//   searchChange,
//   searchClear,
// }) => (
//   <Segment inverted color="pink" id="search-container">
//     <Form loading={!searchParams[0].values.length}>
//       <Header dividing as="h1" color="violet" content="Filter" textAlign="center" />
//       {searchParams.map(({ label, values }) => (
//         <Form.Group grouped key={label}>
//           <Header as="h3" color="violet" content={label} />
//           {values.map(([value, count]) => (
//             <Form.Checkbox
//               key={value}
//               color="violet"
//               name={label}
//               value={value}
//               checked={checkedObj[label] === value}
//               label={`${value} (${count})`}
//               onChange={searchChange}
//             />
//           ))}
//         </Form.Group>
//       ))}
//       <Form.Button
//         fluid
//         size="big"
//         color="purple"
//         content="View All"
//         disabled={areBoxesEmpty}
//         onClick={searchClear}
//       />
//     </Form>
//   </Segment>
// );

// export default SearchBox;
