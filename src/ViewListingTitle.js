import React, { Fragment } from "react";
import { Container, Grid, List, Segment } from "semantic-ui-react";
import ImgWithPlaceholder from "./ImgWithPlaceholder";

const ViewListingTitle = ({
  petName,
  images = [],
  // breed,
  // gender,
  // age,
  // color,
  // weight,
  // location,
  openImageShowCase,
  ...props
}) => {
  const primaryImgUrl = images[0];
  const secondImgUrls = images.slice(1);
  const secondaryImgs = secondImgUrls.map((url, i) => (
    <Grid.Column key={i + url} width={2}>
      {/* <Segment compact color="pink"> */}
      <ImgWithPlaceholder
        id={i + 1}
        src={url}
        alt={petName}
        className="subImage"
        onClick={openImageShowCase}
      />
      {/* </Segment> */}
    </Grid.Column>
  ));

  return (
    <Container>
      <Grid columns="equal">
        {/* <h2 className="petNameTitle">{`My name is ${petName}!`}</h2> */}
        <Grid.Row columns={16}>
          <Grid.Column width={9}>
            <Segment inverted color="pink">
              <ImgWithPlaceholder
                id="0"
                src={primaryImgUrl}
                alt="Main image of pet"
                className="imageMain"
                onClick={openImageShowCase}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <ListingDetails {...props} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={9}>
        <Grid.Row columns={9}>{secondaryImgs}</Grid.Row>
      </Grid>
    </Container>
  );
};

export default ViewListingTitle;

const ListingDetails = props => (
  <Fragment>
    <Grid.Column width={3} className="factItemList">
      <List.Content>
        <strong>Breed:</strong> {props.breed}
      </List.Content>
      <List.Content>
        <strong>Gender:</strong> {props.gender}
      </List.Content>
      <List.Content>
        <strong>Age:</strong> {props.age} years
      </List.Content>
    </Grid.Column>
    <Grid.Column width={3} className="factItemList">
      <List.Content>
        <strong>Color:</strong> {props.color}
      </List.Content>
      <List.Content>
        <strong>Weight:</strong> {props.weight}
      </List.Content>
      <List.Content>
        <strong>Location:</strong> {props.location}
      </List.Content>
    </Grid.Column>
    {/* <Grid.Row width={10}>{secondaryImgs}</Grid.Row> */}
  </Fragment>
);
