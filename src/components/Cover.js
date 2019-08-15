import React from "react";
import CoverComponent from "./CoverComponent.js";

class Cover extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.image != undefined) {
      return <CoverComponent image={this.props.image} />;
    } else {
      return <div></div>;
    }
  }
}

export default Cover;
