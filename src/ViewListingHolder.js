import React, { Component } from "react";
import BlurredLoader from "./BlurredLoader";
import ImageShowCase from "./ImageShowCase";
import ViewListingPage from "./ViewListingPage";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>Adopt a Korean Pet || View Pet</title>
          <meta name="keywords" content="Adopt,Pet,Korean animals,Adopt a Korean Pet" />
          <meta name="description" content="View one of our Korean pet listings" />
        </Helmet>
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
