import React from "react";
import { Grid, Segment, Image } from "semantic-ui-react";
import ImgWithPlaceholder from "./ImgWithPlaceholder";

const ViewListingImages = ({ images, openImageShowCase }) => {
  const primaryImgUrl = images[0];
  const secondImgUrls = images.slice(1);
  return (
    <Grid.Column width={9}>
      {/* Primary Image */}
      <Segment inverted color="pink">
        <ImgWithPlaceholder
          id="0"
          src={primaryImgUrl}
          alt="Korean pet for adoption - main image"
          className="imageMain"
          onClick={openImageShowCase}
        />
      </Segment>
      {/* Secondary Images */}
      <Image.Group
        // added a classname to help with image sizing on mobile
        className={`scnd-listing-imgs ${
          secondImgUrls.length === 4 ? "mobile-stack" : ""
        }`}
      >
        {secondImgUrls.map((url, i) => (
          <Segment key={i + 1} color="pink">
            <ImgWithPlaceholder
              id={i + 1}
              src={url}
              alt={`Korean pet for adoption - image ${i + 1}`}
              className="subImage"
              onClick={openImageShowCase}
            />
          </Segment>
        ))}
      </Image.Group>
    </Grid.Column>
  );
};

export default ViewListingImages;
