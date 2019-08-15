import React from "react";
import DetailsComponent from "./DetailsComponent.js";

class Details extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <DetailsComponent currentSong={this.props.currentSong} />;
  }
}

export default Details;
