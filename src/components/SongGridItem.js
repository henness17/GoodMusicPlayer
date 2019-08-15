import React from "react";
import SongGridItemComponent from "./SongGridItemComponent.js";

class SongGridItem extends React.Component {
  constructor() {
    super();
  }

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

export default SongGridItem;
