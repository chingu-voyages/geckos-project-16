import React from "react";
import { Button, Icon, Grid, Segment, Header, Label } from "semantic-ui-react";

const ViewListingAction = ({ contactName, contactEmail, adoptionFee }) => (
  <Grid.Column style={{ paddingTop: "14px" }} width={16}>
    <Segment inverted color="pink" className="listing-story">
      <Header as="h2" color="violet" content="Interested?" />
      <Grid stackable columns={16} className="listing-contact">
        <Grid.Row columns={16}>
          <Grid.Column mobile={16} tablet={8} computer={8} className="contact-info">
            <Header as="h4">
              <Icon name="user" color="violet" />
              <Header.Content>
                Contact Name:
                <Header.Subheader content={contactName} />
              </Header.Content>
            </Header>
            <Header as="h4">
              <Icon name="mail" color="violet" />
              <Header.Content>
                Contact Email:
                <Header.Subheader content={contactEmail} />
              </Header.Content>
            </Header>
            <Header as="h4">
              <Icon name="won sign" color="violet" />
              <Header.Content>
                Adoption Fee:
                <Header.Subheader
                  content={
                    adoptionFee
                      ? `₩${Number(adoptionFee.slice(1)).toLocaleString()}`
                      : adoptionFee
                  }
                />
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8} className="listing-actions">
            <Button size="huge" color="purple">
              I'm interested!
            </Button>
            <div className="share-container">
              <Label
                icon="share"
                color="purple"
                pointing="below"
                className="socialMediaShare"
                content="Share"
              />
              <Button.Group>
                {socialShares.map(social => (
                  <Button circular {...social} className="socialMediaButton" />
                ))}
              </Button.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Grid.Column>
);

const socialShares = [
  { icon: "facebook", color: "facebook", key: "facebook" },
  { icon: "twitter", color: "twitter", key: "twitter" },
  { icon: "instagram", color: "instagram", key: "instagram" },
  { icon: "pinterest", color: "red", key: "pinterest" },
  { icon: "mail", color: "yellow", key: "mail" },
];

export default ViewListingAction;
