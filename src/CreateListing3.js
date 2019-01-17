import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class CreateListing3 extends Component {
  openWidget = () =>
    window.cloudinary.openUploadWidget(
      {
        cloudName: "cloudinaryUserName",
        uploadPreset: "default",
        sources: ["local", "camera", "facebook", "instagram"],
        multiple: true,
        maxFiles: 5,
        // CAN'T CROP IF MULTIPLE IS TRUE
        // cropping: true,
        // croppingAspectRatio: 1.4,
        folder: "petChingus",
        clientAllowedFormats: ["png", "jpeg"],
        maxFileSize: 2000000,
        singleUploadAutoClose: false,
        window: "#FFF",
        windowBorder: "#f185b3",
        tabIcon: "#0E2F5A",
        menuIcons: "#5A616A",
        textDark: "#90007f",
        textLight: "#FFFFFF",
        link: "#0078FF",
        action: "#FF620C",
        inactiveTabIcon: "#0E2F5A",
        error: "#F44235",
        inProgress: "#0078FF",
        complete: "#20B832",
        sourceBg: "#E4EBF1",
      },
      (error, result) => {
        this.setState({ widgetEvent: result.event });
        console.log(result);
      }
    );

  render() {
    return (
      <Button
        disabled={true}
        color="violet"
        content="Upload Images"
        icon="upload"
        onClick={this.openWidget}
      />
    );
  }
}

export default CreateListing3;
