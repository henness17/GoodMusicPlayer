import React from "react";
import PropTypes from "prop-types";
import SongGridComponent from "./SongGridComponent.js";

class SongGrid extends React.Component {
  render() {
    return (
      <SongGridComponent
        songs={this.props.songs}
        addSongToQueue={this.props.addSongToQueue}
      />
    );
  }
}

SongGrid.propTypes = {
  songs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  addSongToQueue: PropTypes.func.isRequired
};

export default SongGrid;
