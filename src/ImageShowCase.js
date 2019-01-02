import React, { Component } from "react";
import { throttle } from "lodash";
import { Icon, Modal, Segment, Rail } from "semantic-ui-react";
import ImgWithPlaceholder from "./ImgWithPlaceholder";
import "./ImageShowCase.css";

// uses a modal to create an img carousel
class ImageShowCase extends Component {
  state = { imgID: this.props.imgID };

  // listens for left/right/esc presses
  componentDidMount() {
    document.addEventListener("keydown", throttle(this.handleKeys, 300));
  }

  // removes the event listener when the component is unmounted
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeys);
  }

  // used to help determine which image to show when opened
  componentDidUpdate(prevProps) {
    const { imgID } = this.props;
    if (prevProps.imgID === imgID || prevProps.isOpen) return;
    this.setState({ id: imgID });
  }

  // handle the next click
  handleNext = () =>
    this.setState(({ imgID }) => ({
      imgID: imgID === this.props.images.length - 1 ? 0 : imgID + 1,
    }));

  // handle the back click
  handlePrev = () =>
    this.setState(({ imgID }) => ({
      imgID: !imgID ? this.props.images.length - 1 : imgID - 1,
    }));

  // handles key presses
  handleKeys = e => {
    const { closeImageShowCase, isOpen } = this.props;
    // if the modal is closed don't run these
    if (!isOpen) return;
    if (e.keyCode === 39) return this.handleNext();
    if (e.keyCode === 37) return this.handlePrev();
    // esc was clicked
    if (e.keyCode === 27) return closeImageShowCase();
  };

  render() {
    const { imgID } = this.state;
    // uncomment to use images from props
    // const { isOpen, closeImageShowCase, images } = this.props;

    // used for testing purposes
    // delete in production
    const { isOpen, closeImageShowCase } = this.props;
    const images = [
      "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?cs=srgb&dl=animals-cats-cute-45170.jpg&fm=jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YdhNIlN5PqquJhiInSCGiEhqw0rbBwAAQ6stCTgrpC_ZzTS4",
      "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      "http://r.ddmcdn.com/w_830/s_f/o_1/cx_98/cy_0/cw_640/ch_360/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg",
      "https://animals.sandiegozoo.org/sites/default/files/2016-08/category-thumbnail-mammals_0.jpg",
    ];
    // ============
    return (
      <Modal basic open={isOpen} className="img-showcase">
        <Modal.Content image>
          <Segment inverted color="olive">
            <ImgWithPlaceholder src={images[imgID]} alt={"pet-" + imgID} />
            <Rail
              as={Icon}
              onClick={this.handlePrev}
              content={<Icon color="purple" name="angle left" />}
              attached
              internal
              position="left"
            />
            <Rail
              as={Icon}
              onClick={this.handleNext}
              content={<Icon color="purple" name="angle right" />}
              attached
              internal
              position="right"
            />
            <Rail
              attached
              position="right"
              content={
                <Icon
                  size="big"
                  name="close"
                  color="olive"
                  className="closeIcon"
                  onClick={closeImageShowCase}
                />
              }
            />
          </Segment>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ImageShowCase;
