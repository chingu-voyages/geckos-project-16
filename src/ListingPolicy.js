import React, { Component } from "react";
import { Accordion, Icon, List, Segment, Container } from "semantic-ui-react";
import "./ListingPolicy.css";
export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Container>
        <Segment inverted color="pink" className="lp-segment">
          <Accordion styled className="lp-accordion">
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Listing Guidelines
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <List as="ul" className="listing-policy-items">
                <List.Item as="li" className="listing-policy-item">
                  <span className="policy-heading">ONE animal per listing.</span> Please
                  only list one animal in your listing. If the animal is in a bonded pair,
                  you can select “bonded pair” in the list of description options
                  provided. In the written description box, please include a link to the
                  other animal’s listing or just their name.
                </List.Item>
                <List.Item as="li" className="listing-policy-item">
                  <span className="policy-heading">
                    Only type the NAME of the animal in the name field.
                  </span>{" "}
                  Please don't add things like "urgent" or any additional information.
                  Please use a name and not a description like "Baby" "Kitten" "Puppy"
                  etc. You can include this in the description field. Please use only
                  English characters. Do not post the animal’s name in Hangeul. Also, to
                  avoid errors in your upload, please keep the name short (example:
                  "David", not "David formerly Socks").
                </List.Item>
                <List.Item as="li" className="listing-policy-item">
                  <span className="policy-heading">Only post LANDSCAPE photos.</span>{" "}
                  Please post photos taken in landscape view (“long” ways). Photos in
                  vertical view (“tall” ways) will be cut off and site viewers will not
                  see the full image of the cutie you’ve listed.
                </List.Item>
                <List.Item as="li" className="listing-policy-item">
                  <span className="policy-heading">
                    The animal MUST be in your possession.
                  </span>{" "}
                  Only list animals that you have in your possession. Please do NOT post
                  about animals you’ve seen on the street if you did not take the animal
                  in. Please also do not post for animals in a government pound. We know
                  you want to help these animals, but the best way would be to take them
                  in as a foster family or take them to a local no-kill shelter. If you
                  are posting on behalf of a no-kill shelter, you must provide written
                  authorization from the shelter owner that you are the designated contact
                  for posting listings.
                </List.Item>
                <List.Item as="li" className="listing-policy-item">
                  <span className="policy-heading">
                    Use YOUR email address and respond to ALL inquires.
                  </span>{" "}
                  The contact email for each listing MUST belong to the person that
                  created the listing. This person should have authority to process
                  adoption applications for the listed animal. The contact person must
                  speak English. If you are posting on behalf of a non-English speaking
                  acquaintance or facility, please be sure to follow all other guidelines.
                  After listing an animal, you have agreed to answer all inquiries in a
                  timely fashion. If several complaints are received regarding an
                  unresponsive lister, the listing will be removed from the site and the
                  user will be issued a warning. Several incidences will result in the
                  user being blacklisted.
                </List.Item>
                <List.Item as="li" className="listing-policy-item">
                  <span className="policy-heading">
                    DELETE your listing after adoption.
                  </span>{" "}
                  Please delete the listing for the animal when adoption is no longer
                  needed. Rescue Korea has received several complaints from would-be
                  adopters regarding abandoned listings and unresponsive listers. Keep in
                  mind that unhappy adopters will lead to less visits and recommendations
                  to use our site. To make sure our furry friends here have the highest
                  chances of find loving homes, please use the site responsibly.
                </List.Item>
              </List>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              How to List an Animal
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <List as="ol" className="listing-policy-items">
                <List.Item as="li" className="listing-policy-item">
                  Make an Account. After reading through the listing guidelines, you’re
                  ready to post your listing! Click “Login” in the upper right-hand corner
                  of the page. Then, select “Create new account” and fill in the required
                  fields. When you are finished, hit the “Create New Account” button. You
                  will be sent an email with your initial login information and prompted
                  to change your password and user information.
                </List.Item>
                <List.Item as="li" className="listing-policy-item">
                  Add a new listing. Now that you are a member, you will see new options
                  in the drop down menu for “Pet Adoption”. Please select “Add a New
                  Listing” followed by the type of animal.
                </List.Item>
                <List.Item as="li" className="listing-policy-item">
                  Create your listing. You will be taken to a listing form. Simply fill in
                  all relevant information and upload a photo/photos in accordance with
                  the listing guidelines. When you have finished, check that everything is
                  in order by clicking “Preview” and finally “Save”.
                </List.Item>
              </List>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              How to Edit & Delete A Listing
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <List>
                <List.Item className="listing-policy-item">
                  Login to your account and open the listing for the animal. You will see
                  two options on your listing, “View” and “Edit”. Click “Edit”. You will
                  then have the freedom to update any of the information regarding the
                  animal OR to delete the listing.
                </List.Item>
              </List>
            </Accordion.Content>
          </Accordion>
        </Segment>
      </Container>
    );
  }
}
