import React from "react";
import { Grid, Container } from "semantic-ui-react";
import ViewListingImages from "./ViewListingImages";
import ViewListingInfo from "./ViewListingInfo";
import ViewListingStory from "./ViewListingStory";
import ViewListingContact from "./ViewListingContact";
import "./ViewListingPage.css";
import { Helmet } from "react-helmet";

export default ({ petInfo, openImageShowCase }) => (
  <Container>
    <Helmet>
      <title>Adopt a Korean Pet || View Listings</title>
      <meta name="keywords" content="Adopt,Pet,Korean animals,Adopt a Korean Pet" />
      <meta
        name="description"
        content="View, search and filter all of our Korean pet listings"
      />
    </Helmet>
    <Grid stackable>
      <Grid.Row columns={16}>
        <ViewListingImages
          images={petInfo.images || []}
          openImageShowCase={openImageShowCase}
        />
        <ViewListingInfo {...petInfo} />
        <ViewListingStory story={petInfo.description} />
        <ViewListingContact
          contactName={petInfo.user ? petInfo.user.contactName : null}
          contactEmail={petInfo.user ? petInfo.user.email : null}
          adoptionFee={petInfo.adoptionFee}
        />
      </Grid.Row>
    </Grid>
  </Container>
);
