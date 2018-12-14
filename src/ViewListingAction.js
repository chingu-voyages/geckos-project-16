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
          <h4>Share:</h4>
        </List.Item>
        <Button circular color="facebook" icon="facebook" />
        <Button circular color="twitter" icon="twitter" />
        <Button circular color="purple" icon="instagram" />
        <Button circular color="pinterest" icon="pinterest" />
        <Button circular color="yellow" icon="mail" />
      </List>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <List.Item>
              <List.Content>
                <strong>Contact Name:</strong> John Doe
              </List.Content>
            </List.Item>
          </Grid.Column>
          <List.Item>
            <List.Content>
              <strong>Contact Email:</strong> jdoe34@gmail.com
            </List.Content>
          </List.Item>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <List.Item>
              <List.Content>
                <strong>Adoption Fee:</strong> 10,000 Won
              </List.Content>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Fragment>
);

export default ViewListingAction;
