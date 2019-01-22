import React from "react";
import { Grid, Container } from "semantic-ui-react";
import ViewListingImages from "./ViewListingImages";
import ViewListingInfo from "./ViewListingInfo";
import ViewListingStory from "./ViewListingStory";
import ViewListingContact from "./ViewListingContact";
import "./ViewListingPage.css";

export default ({ petInfo, openImageShowCase, user }) => {
  console.log(user);
  console.log(petInfo);
  return (
    <Container>
      <Grid stackable>
        <Grid.Row columns={16}>
          <ViewListingImages
            images={petInfo.images || []}
            openImageShowCase={openImageShowCase}
          />
          <ViewListingInfo {...petInfo} />
          <ViewListingStory story={petInfo.description} />
          <ViewListingContact
            contactName={petInfo.owner.name}
            contactEmail={petInfo.owner.email}
            adoptionFee={petInfo.adoptionFee}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};
