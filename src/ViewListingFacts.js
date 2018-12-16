import React, { Fragment } from "react";
import { List, Grid, Container } from "semantic-ui-react";

const ViewListingFacts = ({ breed, gender, age, color, weight, location }) => (
  <Fragment>
    <Container>
      <h3>Facts About Me</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <List.Item>
              <List.Content>
                <strong>Breed:</strong> {breed}
              </List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={3}>
            <List.Item>
              <List.Content>
                <strong>Color:</strong> {color}
              </List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <List.Item>
              <List.Content>
                <strong>Gender:</strong> {gender}
              </List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={3}>
            <List.Item>
              <List.Content>
                <strong>Weight:</strong> {weight}
              </List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <List.Item>
              <List.Content>
                <strong>Age:</strong> {age}
              </List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={3}>
            <List.Item>
              <List.Content>
                <strong>Location:</strong> {location}
              </List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Fragment>
);

export default ViewListingFacts;
