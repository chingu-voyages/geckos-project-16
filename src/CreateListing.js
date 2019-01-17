import React, { Component } from "react";
import { Container, Segment, Header, Button, Form, Accordion } from "semantic-ui-react";
import CreateListing1 from "./CreateListing1";
import CreateListing2 from "./CreateListing2";
import CreateListing3 from "./CreateListing3";
import "./CreateListing.css";

class CreateListing extends Component {
  state = { step: 0 };

  handleClick = e => {
    this.setState(prevState => ({ step: prevState.step + 1 }));
  };

  render() {
    const { step } = this.state;
    return (
      <Container>
        <Segment inverted color="pink">
          <Segment>
            <Header
              as="h1"
              color="violet"
              content="Create a Listing"
              textAlign="center"
            />
            <Form>
              <Accordion>
                <Accordion.Title active={step === 0} index={0} />
                <Accordion.Content active={step === 0} index={0}>
                  <CreateListing1 />
                </Accordion.Content>
                <Accordion.Title active={step === 1} index={1} />
                <Accordion.Content active={step === 1} index={1}>
                  <CreateListing2 />
                </Accordion.Content>
                <Accordion.Title active={step === 2} index={2} />
                <Accordion.Content active={step === 2} index={2}>
                  <CreateListing3 />
                </Accordion.Content>
              </Accordion>
            </Form>
            <Button
              color="purple"
              content="Proceed"
              icon="chevron right"
              labelPosition="right"
              onClick={this.handleClick}
            />
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default CreateListing;
