import React from "react";
import PropTypes from "prop-types";
import SongGridItemComponent from "./SongGridItemComponent.js";

class SongGridItem extends React.Component {
  render() {
    return (
      <SongGridItemComponent
        song={this.props.song}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        addSongToQueue={this.props.addSongToQueue}
      />
    );
  }
}

SongGridItem.propTypes = {
  song: PropTypes.object.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  addSongToQueue: PropTypes.func.isRequired
};

export default SongGridItem;
