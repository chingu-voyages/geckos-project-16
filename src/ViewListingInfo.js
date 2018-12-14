import React, { Fragment } from "react";
import { List, Grid, Icon, Container } from "semantic-ui-react";

const ViewListingInfo = ({
  vaccinated,
  goodWithKids,
  goodWithDogs,
  goodWithCats,
  houseTrained,
  leashTrained,
  crateTrained,
  litterTrained,
}) => (
  <Fragment>
    <Container>
      <h3>My Info</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Spayed/Neutered</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Good with kids</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="times" />
              <List.Content>Leash trained</List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Vaccinated</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Good with dogs</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Crate trained</List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>House trained</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="times" />
              <List.Content>Good with cats</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Litter trained</List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Fragment>
);

export default ViewListingInfo;
