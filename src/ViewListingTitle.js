import React, { Fragment } from "react";
import { Image, Container, Grid, List, Divider, Button } from "semantic-ui-react";

const ViewListingTitle = ({
  petName,
  imageMain,
  image2,
  image3,
  image4,
  breed,
  gender,
  age,
  color,
  weight,
  location,
}) => (
  <Fragment>
    <Container>
      <h2 className="petNameTitle">{`My name is ${petName}!`}</h2>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={8}>
            <Image src={imageMain} alt="Main image of pet" className="imageMain" />
          </Grid.Column>
          <Grid.Column width={3} className="factItemList">
            <List.Content>
              <strong>Breed:</strong> {breed}
            </List.Content>
            <List.Content>
              <strong>Gender:</strong> {gender}
            </List.Content>
            <List.Content>
              <strong>Age:</strong> {age} years
            </List.Content>
          </Grid.Column>
          <Grid.Column width={3} className="factItemList">
            <List.Content>
              <strong>Color:</strong> {color}
            </List.Content>
            <List.Content>
              <strong>Weight:</strong> {weight}
            </List.Content>
            <List.Content>
              <strong>Location:</strong> {location}
            </List.Content>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image src={imageMain} alt="Additional image of pet" className="subImage" />
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={image2} alt="Additional image of pet" className="subImage" />
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={image3} alt="Additional image of pet" className="subImage" />
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={image4} alt="Additional image of pet" className="subImage" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </Container>
  </Fragment>
);

export default ViewListingTitle;
