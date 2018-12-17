import React, { Fragment } from "react";
import { Button, Container, List, Grid } from "semantic-ui-react";

const ViewListingAction = ({ contactName, contactEmail, fee }) => (
  <Fragment>
    <Container>
      <h3>Adopt Me!</h3>
      <List horizontal relaxed>
        <List.Item>
          <Button positive>Register Your Interest</Button>
        </List.Item>
        <List.Item>
          <h4 className="socialMediaShare">Share:</h4>
        </List.Item>
        <Button circular color="facebook" icon="facebook" className="socialMediaButton" />
        <Button circular color="twitter" icon="twitter" className="socialMediaButton" />
        <Button circular color="purple" icon="instagram" className="socialMediaButton" />
        <Button circular color="red" icon="pinterest" className="socialMediaButton" />
        <Button circular color="yellow" icon="mail" className="socialMediaButton" />
      </List>
      <Grid>
        <Grid.Row className="contactDetails">
          <Grid.Column width={8}>
            <List.Item>
              <List.Content>
                <strong>Contact Name:</strong> {contactName}
              </List.Content>
            </List.Item>
          </Grid.Column>
          <List.Item>
            <List.Content>
              <strong>Contact Email:</strong> {contactEmail}
            </List.Content>
          </List.Item>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <List.Item>
              <List.Content className="adoptionFee">
                <strong>Adoption Fee:</strong> ₩{fee}
              </List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Fragment>
);

export default ViewListingAction;
