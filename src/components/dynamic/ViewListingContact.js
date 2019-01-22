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
                  content={adoptionFee ? `${adoptionFee.toLocaleString()}` : "No Charge!"}
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
                  <Button
                    circular
                    {...social}
                    as="a"
                    target="_newtab"
                    className="socialMediaButton"
                  />
                ))}
              </Button.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Grid.Column>
);

//Need to grab the current page URL here somehow
const currentUrl = "";

const socialShares = [
  {
    icon: "facebook",
    color: "facebook",
    key: "facebook",
    href: `http://www.facebook.com/sharer.php?u=${currentUrl}`,
  },
  {
    icon: "twitter",
    color: "twitter",
    key: "twitter",
    href: `https://twitter.com/intent/tweet?&url=${currentUrl}`,
  },
  {
    icon: "pinterest",
    color: "red",
    key: "pinterest",
    href: `https://www.pinterest.com/login/?next=/pin/create/button/%3Furl%3D${currentUrl}`,
  },
  {
    icon: "mail",
    color: "yellow",
    key: "mail",
    href: `mailto:?Subject=Adopt a pet today`,
  },
];

export default ViewListingAction;
