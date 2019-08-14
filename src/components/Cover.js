import React from "react";
import CoverComponent from "./CoverComponent.js";

class Cover extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.image != undefined) {
      return (
        <div>
          <CoverComponent image={this.props.image} />
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Cover;
