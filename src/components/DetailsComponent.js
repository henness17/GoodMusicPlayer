import React from "react";
import PropTypes from "prop-types";

class DetailsComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentSong["title"]}</h1>
        <h3>{this.props.currentSong["artist"]}</h3>
      </div>
    );
  }
}

DetailsComponent.propTypes = {
  currentSong: PropTypes.object.isRequired
};

export default DetailsComponent;
