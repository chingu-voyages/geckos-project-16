import React, { Component } from "react";
import BlurredLoader from "./BlurredLoader";
import ImageShowCase from "./ImageShowCase";
import ViewListingPage from "./ViewListingPage";

class ViewListingHolder extends Component {
  state = {
    isLoading: true,
    petInfo: {},
    showImageShowCase: false,
    imgID: null,
  };

  // Fetch data for individual pet
  async componentDidMount() {
    try {
      const id = Number(this.props.match.params.id);
      const url = `http://localhost:4000/posts/${id}`;
      const response = await fetch(url);
      const petInfo = await response.json();
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
    return (
      <div className="listing-container">
        <BlurredLoader isLoading={isLoading}>
          <ViewListingPage petInfo={petInfo} openImageShowCase={this.openImageShowCase} />
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

export default ViewListingHolder;
