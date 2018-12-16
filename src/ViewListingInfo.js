import React, { Fragment } from "react";
import { List, Grid, Container, Divider } from "semantic-ui-react";

const ViewListingInfo = ({
  spayed,
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
              <List.Icon name={spayed ? "check" : "times"} />
              <List.Content>Spayed/Neutered</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name={goodWithKids ? "check" : "times"} />
              <List.Content>Good with kids</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name={leashTrained ? "check" : "times"} />
              <List.Content>Leash trained</List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name={vaccinated ? "check" : "times"} />
              <List.Content>Vaccinated</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name={goodWithDogs ? "check" : "times"} />
              <List.Content>Good with dogs</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name={crateTrained ? "check" : "times"} />
              <List.Content>Crate trained</List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name={houseTrained ? "check" : "times"} />
              <List.Content>House trained</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name={goodWithCats ? "check" : "times"} />
              <List.Content>Good with cats</List.Content>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={5}>
            <List.Item>
              <List.Icon name={litterTrained ? "check" : "times"} />
              <List.Content>Litter trained</List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </Container>
  </Fragment>
);

export default ViewListingInfo;
