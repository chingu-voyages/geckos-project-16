import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BlurredLoader from "./BlurredLoader";
import ImageShowCase from "./ImageShowCase";
import ViewListingPage from "./ViewListingPage";
import { fetcher } from "./helpers";

class ViewListingHolder extends Component {
  state = {
    isLoading: true,
    petInfo: {},
    showImageShowCase: false,
    imgID: null,
  };

  // Fetch data for individual pet
  async componentDidMount() {
    console.log(this.props);
    try {
      const id = this.props.match.params.id;
      const response = await fetcher(`/posts/${id}`, {});
      console.log(response);
      const petInfo = await response.json();
      console.log(petInfo);
      this.setState({ petInfo, isLoading: false });
    } catch (err) {
      console.log(err);
    }
  }

  closeImageShowCase = () => this.setState({ showImageShowCase: false });

  openImageShowCase = e =>
    this.setState({
      showImageShowCase: true,
      imgID: Number(e.target.id),
    });

  render() {
    const { petInfo, isLoading, showImageShowCase, imgID } = this.state;
    console.log(Object.keys(petInfo).length && petInfo.owner.id);
    console.log(this.props.user && this.props.user.userId);
    return (
      <div className="listing-container">
        <BlurredLoader isLoading={isLoading}>
          <ViewListingPage
            user={this.props.user}
            petInfo={petInfo}
            openImageShowCase={this.openImageShowCase}
          />
          {!isLoading && this.state.imgID !== null && (
            <ImageShowCase
              images={petInfo.images}
              isOpen={showImageShowCase}
              imgID={imgID}
              closeImageShowCase={this.closeImageShowCase}
            />
          )}
        </BlurredLoader>
      </div>
    );
  }
}

export default withRouter(ViewListingHolder);
