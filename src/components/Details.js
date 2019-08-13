import React from "react";
import DetailsComponent from "./DetailsComponent.js";

class Details extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <DetailsComponent currentSong={this.props.currentSong} />
      </div>
    );
  }
}

export default Details;
