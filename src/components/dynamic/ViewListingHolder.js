import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BlurredLoader from "../reusable/BlurredLoader";
import ImageShowCase from "../reusable/ImageShowCase";
import ViewListingPage from "../dynamic/ViewListingPage";
import { fetcher } from "../../helpers";

const emptyPetInfo = {
  owner: {
    id: "",
    name: "",
    email: "",
  },
  goodWith: [],
  trained: [],
  images: [],
  _id: "",
  petName: "",
  type: "",
  breed: "",
  gender: "",
  size: "",
  color: "",
  description: "",
  location: "",
  adoptionFee: 0,
  spayed: false,
  vaccinated: true,
  age: "",
  createdAt: "",
};

class ViewListingHolder extends Component {
  state = {
    isLoading: true,
    petInfo: emptyPetInfo,
    showImageShowCase: false,
    imgID: null,
  };

  // Fetch data for individual pet
  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const response = await fetcher(`/posts/${id}`, {});
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
