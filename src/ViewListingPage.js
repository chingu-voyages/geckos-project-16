import React from "react";

import ViewListingTitle from "./ViewListingTitle";
import ViewListingFacts from "./ViewListingFacts";
import ViewListingInfo from "./ViewListingInfo";
import ViewListingStory from "./ViewListingStory";
import ViewListingAction from "./ViewListingAction";

class ViewListingPage extends React.Component {
  render() {
    return (
      <Fragment>
        <ViewListingTitle />
        <ViewListingFacts />
        <ViewListingInfo />
        <ViewListingStory />
        <ViewListingAction />
      </Fragment>
    );
  }
}

export default ViewListingPage;
