import React from "react";
import { Container, Grid, List, Divider } from "semantic-ui-react";
import ImgWithPlaceholder from "./ImgWithPlaceholder";

const ViewListingTitle = ({
  petName,
  images = [],
  breed,
  gender,
  age,
  color,
  weight,
  location,
  openImageShowCase,
}) => {
  const primaryImgUrl = images[0];
  const secondImgUrls = images.slice(1);
  const secondaryImgs = secondImgUrls.map((url, i) => (
    <Grid.Column key={i + url} width={2}>
      <ImgWithPlaceholder
        id={i + 1}
        src={url}
        alt={petName}
        className="subImage"
        onClick={openImageShowCase}
      />
    </Grid.Column>
  ));
  return (
    <Container>
      <h2 className="petNameTitle">{`My name is ${petName}!`}</h2>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={8}>
            <ImgWithPlaceholder
              id="0"
              src={primaryImgUrl}
              alt="Main image of pet"
              className="imageMain"
              onClick={openImageShowCase}
            />
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
        <Grid.Row>{secondaryImgs}</Grid.Row>
      </Grid>
      <Divider />
    </Container>
  );
};

export default ViewListingTitle;
