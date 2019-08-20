import React from "react";
import PropTypes from "prop-types";
import DetailsComponent from "./DetailsComponent.js";

class Details extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <DetailsComponent currentSong={this.props.currentSong} />;
  }
}

Details.propTypes = {
  currentSong: PropTypes.object.isRequired
};

export default Details;
